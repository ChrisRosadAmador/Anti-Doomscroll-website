import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './Landing-Page/LandingPage'
import Header from './Header/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <LandingPage />
  </StrictMode>,
)
