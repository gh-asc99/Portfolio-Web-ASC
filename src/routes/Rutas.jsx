import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DatosPersonales from '../pages/DatosPersonales.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'
import ExperienciaLaboral from '../pages/ExperienciaLaboral.jsx'
import FormacionAcademica from '../pages/FormacionAcademica.jsx'
import ProyectosDestacados from '../pages/ProyectosDestacados.jsx'
import Novedades from '../pages/Novedades.jsx'

const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<DatosPersonales/>}/>
        <Route path='/novedades' element={<Novedades/>}/>
        <Route path='/experiencia-laboral' element={<ExperienciaLaboral/>}/>
        <Route path='/formacion-academica' element={<FormacionAcademica/>}/>
        <Route path='/proyectos-destacados' element={<ProyectosDestacados/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Rutas
