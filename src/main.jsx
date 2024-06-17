import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { SnackbarProvider } from "notistack"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
        <App/>
  </React.StrictMode>,
)
{/* < SnackbarProvider> */}
