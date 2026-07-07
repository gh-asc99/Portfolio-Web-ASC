import React from 'react'
import iconoError from '../assets/icono-error.png'

const PageNotFound = () => {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <h2 className='text-2xl font-semibold'>Esta ruta no existe</h2>
      <img src={iconoError} alt="" className='flex h-40 object-contain'/>
      <p>Vaya... Al parecer no hay nada en esta ruta.</p>
    </div>
  )
}

export default PageNotFound
