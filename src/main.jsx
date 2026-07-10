import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from './lib/router'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
