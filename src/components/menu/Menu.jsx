import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='flex gap-5'>
      <Link to='/' className='hover:bg-sky-500 bg-gray-500 px-4 py-1 rounded-sm text-white'>Datos personales</Link>
      <Link to='/experiencia-laboral' className='hover:bg-sky-500 bg-gray-500 px-4 py-1 rounded-sm text-white'>Experiencia laboral</Link>
      <Link to='/formacion-academica' className='hover:bg-sky-500 bg-gray-500 px-4 py-1 rounded-sm text-white'>Formación académica</Link>
      <Link to='/proyectos-destacados' className='hover:bg-sky-500 bg-gray-500 px-4 py-1 rounded-sm text-white'>Proyectos destacados</Link>
    </nav>
  )
}

export default Menu
