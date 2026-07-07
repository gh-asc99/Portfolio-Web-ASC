import React from 'react'

const Idioma = (props) => {
  return (
    <div className='shadow-xl py-2 px-4 w-50 bg-yellow-200 flex flex-col gap-1 justify-center text-center border border-dashed rounded-sm'>
      <p className='font-bold'>{props.idioma} - {props.nivel}</p>
      <small>({props.origen})</small>
    </div>
  )
}

export default Idioma
