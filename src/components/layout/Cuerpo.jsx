import React from 'react'

const Cuerpo = ({children}) => {
  return (
    <div className='min-h-screen pt-20 pb-5 w-full overflow-auto bg-gray-200 px-20'>
      {children}
    </div>
  )
}

export default Cuerpo
