import React from 'react'
import novedades from '../assets/datosJSON/novedades.json'
import Novedad from '../components/components/Novedad'

const Novedades = () => {
  return (
    <div className="flex flex-col gap-4  md:px-0">
      <h2 className="text-2xl font-semibold underline">Tablón de novedades</h2>

      <div className='w-full'>
        <p className='pb-2'>Estas son mis novedades más recientes:</p>
        <div className='w-full'>
          {
            novedades.length > 0 ? (
              <ul>
                {
                  novedades.toReversed().map((nov) => (
                    <li key={nov.id}>
                      <Novedad novedad={nov}/>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p>No hay novedades de momento.</p>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Novedades
