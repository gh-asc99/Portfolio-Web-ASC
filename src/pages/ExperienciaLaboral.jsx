import React from 'react'
import Experiencia from '../components/components/Experiencia.jsx'
import experienciasLaborales from '../assets/datosJSON/experienciasLaborales.json'

const ExperienciaLaboral = () => {

  

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold underline'>Experiencia laboral</h2>
      
      <div className='w-full'>
<p className='pb-2'>Mi experiencia laboral es la siguiente:</p>
        <div>
          {
            experienciasLaborales.length > 0 ? (
              <ul className='flex flex-col gap-3'>
                {
                  experienciasLaborales.map((exp) => (
                <li key={exp.id}><Experiencia puesto={exp.puesto} funciones={exp.funciones} empresa={`${exp.empresa} (${exp.lugar})`} logo={exp.logo} fechaInicio={exp.fechaInicio} fechaFinal={exp.fechaFinal} destacado={exp.destacado}/></li>
              ))
                }
              </ul>
              
            ) : (
              <p>No hay experiencias registradas.</p>
            )
          }
        </div>
      </div>
      


    </div>
  )
}

export default ExperienciaLaboral
