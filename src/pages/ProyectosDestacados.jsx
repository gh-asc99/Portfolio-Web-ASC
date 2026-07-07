import React from 'react'
import proyectosDestacados from '../assets/datosJSON/proyectosDestacados.json'
import Proyecto from '../components/components/Proyecto'


const ProyectosDestacados = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold underline'>Proyectos destacados</h2>
      <div>
        <p className='pb-2'>Estos son mis proyectos más destacados hasta la fecha:</p>
        <div className='w-full'>
          {
            proyectosDestacados.length > 0 ? (
              proyectosDestacados.map((proy) => (
                <Proyecto proyecto={proy}/>
              ))
            ) : (
              <p>No se han registrado proyectos destacados de momento.</p>
            )
          }
        </div>
      </div>
      
    </div>
  )
}

export default ProyectosDestacados
