import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InicioSesion from './components/InicioSesion'
import Contacto from './components/Contacto '
import NotFount from './components/NotFount'
import Productos from './components/Productos'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App/>}>
          <Route path='/inicio-sesion' element={<InicioSesion/>}/>
          <Route path='/contacto' element = {<Contacto/>}/>
          <Route path='/producto/:id' element={<Productos/>}/>
          <Route path='*' element={<NotFount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
