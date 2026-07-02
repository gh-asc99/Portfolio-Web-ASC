import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'

const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Rutas
