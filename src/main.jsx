import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css';               
import 'primeicons/primeicons.css'; 
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PrimeReactProvider value={{ripple:true}}>
    <App />
    </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
