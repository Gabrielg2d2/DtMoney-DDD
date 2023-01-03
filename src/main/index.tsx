/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
