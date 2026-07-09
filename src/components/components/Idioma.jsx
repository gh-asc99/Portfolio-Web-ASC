import React from 'react'

const Idioma = (props) => {
  return (
    <div className='shadow-xl py-2 px-4 w-50 bg-yellow-200 flex flex-col justify-center text-center border border-dashed rounded-sm'>
      <p className='font-bold'>{props.idioma} - {props.nivel}</p>
      <small><em>({props.origen})</em></small>
    </div>
  )
}

export default Idioma
