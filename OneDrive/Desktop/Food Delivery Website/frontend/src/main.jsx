import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import StorecontextProvider from '.~/context/Storecontext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StorecontextProvider>
    <App />

  </StorecontextProvider>
  </BrowserRouter>
  
)
