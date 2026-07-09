import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setMenuAbierto(!menuAbierto)} 
        className="block md:hidden focus:outline-none text-white p-2"
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuAbierto ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          )}
        </svg>
      </button>

      {menuAbierto && (
        <nav className="flex flex-col gap-5 absolute top-15 border-2 border-black/80 right-0 z-50 rounded-sm bg-gray-300 px-4 py-4 text-center w-48 shadow-lg transition-all duration-300 ease-in-out md:hidden">
          <Link to='/novedades' onClick={() => setMenuAbierto(false)} className='hover:bg-sky-500 bg-gray-500 px-5 py-1 rounded-sm text-white'>Novedades</Link>
          <Link to='/' onClick={() => setMenuAbierto(false)} className='hover:bg-sky-500 bg-gray-500 px-5 py-1 rounded-sm text-white'>Datos personales</Link>
          <Link to='/experiencia-laboral' onClick={() => setMenuAbierto(false)} className='hover:bg-sky-500 bg-gray-500 px-5 py-1 rounded-sm text-white'>Experiencia laboral</Link>
          <Link to='/formacion-academica' onClick={() => setMenuAbierto(false)} className='hover:bg-sky-500 bg-gray-500 px-5 py-1 rounded-sm text-white'>Formación académica</Link>
          <Link to='/proyectos-destacados' onClick={() => setMenuAbierto(false)} className='hover:bg-sky-500 bg-gray-500 px-5 py-1 rounded-sm text-white'>Proyectos destacados</Link>
        </nav>
      )}

      <nav className="hidden md:flex gap-4 mr-2">
        <Link to='/novedades' className='w-47 text-center hover:bg-sky-700 bg-sky-500 px-4 py-1 rounded-sm text-white'>Novedades</Link>
        <Link to='/' className='w-47 text-center hover:bg-sky-700 bg-gray-500 px-4 py-1 rounded-sm text-white'>Datos personales</Link>
        <Link to='/experiencia-laboral' className='w-47 text-center hover:bg-sky-700 bg-gray-500 px-4 py-1 rounded-sm text-white'>Experiencia laboral</Link>
        <Link to='/formacion-academica' className='w-47 text-center hover:bg-sky-700 bg-gray-500 px-4 py-1 rounded-sm text-white'>Formación académica</Link>
        <Link to='/proyectos-destacados' className='w-47 text-center hover:bg-sky-700 bg-gray-500 px-4 py-1 rounded-sm text-white'>Proyectos destacados</Link>
      </nav>
    </div>
  )
}

export default Menu