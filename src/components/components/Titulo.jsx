import React from 'react'
import NombreIcono from './NombreIcono.jsx'

const Titulo = (props) => {
  return (
    <div className='flex border-2 px-4 py-2 items-center rounded-sm bg-gray-300 w-full'>
      <div className="flex flex-col gap-3 w-full">
        <p className="font-semibold w-full">{props.titulo}</p>
        <small>({props.tipo})</small>
        <div className='w-full'>
            <NombreIcono nombre={props.lugar} icono={props.logo} />
        </div>
        
        <p>
          Periodo: <span className="font-semibold">{props.periodo}</span>.
        </p>
      </div>
        
    </div>
  )
}

export default Titulo
