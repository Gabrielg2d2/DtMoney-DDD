import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '@/pages/Home'

import './style-tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
