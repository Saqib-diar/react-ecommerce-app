import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* now we will gonna have support of context api in our project */}
  <ShopContextProvider> 
    <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
