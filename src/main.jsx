import { BrowserRouter, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './Page.jsx'
import Hack from './hacks.jsx'
import Auth from './auth'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <Routes>
              <Route path='/home' element={<Page />}/>
              <Route path='/hacks' element={<Hack />} />
              <Route path='/auth' element={<Auth />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
