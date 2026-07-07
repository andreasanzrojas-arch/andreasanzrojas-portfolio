/**
 * Download Travel Adventures decision screen PNGs via Figma Desktop MCP.
 */
const http = require('http')
const fs = require('fs')
const path = require('path')

const OUT_DIR = path.join(process.cwd(), 'public/assets/projects/travel-adventures')
const SCREENS = {
  'ta-d01-flights': '4130:32467',
  'ta-d02-agency-share': '4194:17398',
  'ta-d03-trips-empty': '4069:28203',
  'ta-d04-trip-name': '4102:13480',
  'ta-d05-trips-done': '4181:14105',
  'ta-d06-confirmation': '4107:16772',
}

function postMcp(sessionId, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: 3845,
        path: '/mcp',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/event-stream',
          ...(sessionId ? { 'mcp-session-id': sessionId } : {}),
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => {
          const session = res.headers['mcp-session-id'] || sessionId
          for (const line of data.split('\n')) {
            if (line.startsWith('data: ')) {
              resolve({ session, parsed: JSON.parse(line.slice(6)) })
              return
            }
          }
          reject(new Error('No MCP data response'))
        })
      }
    )
    req.on('error', reject)
    req.write(JSON.stringify(body))
    req.end()
  })
}

;(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const init = await postMcp(null, {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'travel-download', version: '1.0' },
    },
  })

  const sessionId = init.session
  await postMcp(sessionId, { jsonrpc: '2.0', method: 'notifications/initialized', params: {} })

  let id = 2
  for (const [name, nodeId] of Object.entries(SCREENS)) {
    console.log(`Capturing ${name} (${nodeId})...`)
    const { parsed } = await postMcp(sessionId, {
      jsonrpc: '2.0',
      id: id++,
      method: 'tools/call',
      params: {
        name: 'get_screenshot',
        arguments: { nodeId, contentsOnly: true },
      },
    })

    if (parsed.error) throw new Error(`${name}: ${parsed.error.message}`)
    if (parsed.result?.isError) {
      throw new Error(`${name}: ${parsed.result.content?.[0]?.text || 'MCP error'}`)
    }

    const img = (parsed.result.content || []).find((c) => c.type === 'image')
    if (!img?.data) throw new Error(`No image data for ${name}`)

    const dest = path.join(OUT_DIR, `${name}.png`)
    fs.writeFileSync(dest, Buffer.from(img.data, 'base64'))
    console.log(`  Saved ${dest}`)
  }

  console.log('\nDone!')
})().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
