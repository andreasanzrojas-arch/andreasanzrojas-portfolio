import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.jsx'
import './index.css'

const enableVercelMetrics = import.meta.env.PROD && Boolean(import.meta.env.VERCEL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      {enableVercelMetrics ? (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      ) : null}
    </HelmetProvider>
  </React.StrictMode>,
)
