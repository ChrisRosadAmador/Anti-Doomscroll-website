import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Header/Header'
import PomodoroPage from './PomodoroPage/PomodoPage'
import ErrorPage from './ErrorPage/ErrorPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/Pomodoro' element={<PomodoroPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
