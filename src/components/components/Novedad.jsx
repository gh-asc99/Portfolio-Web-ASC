import React from 'react'

const Novedad = ({ novedad }) => {
    return (
        <div className='bg-gray-300 border rounded-sm py-2 px-4 flex flex-col gap-2 md:flex-row md:gap-4 items-center'>

<img src={novedad.icono} alt={`Icono de ${novedad.titulo}`} className='w-15 h-15 bg-white/80 rounded-full mb-2 md:mb-0'/>

            <img 
                src={novedad.portada} 
                alt={`Portada de ${novedad.titulo}`} 
                className='rounded-sm w-full md:w-1/3 h-auto object-cover' 
            />
            
            <div className='w-full flex flex-col justify-between gap-4'>
                <div className='w-full flex flex-col'>
                    <p className='font-semibold text-lg'>
                        {novedad.titulo}{" "}
                        <span className='text-base font-normal opacity-75'>
                            <em>({novedad.tipo})</em>
                        </span>
                    </p>
                    <p className='text-sky-700 mb-4'>{novedad.descripcion}</p>
                    {
                        novedad.enlace && (
                            <div className='flex gap-2 items-center'>
                                <p>Enlace:</p>
                                <a href={novedad.enlace} target='_blank' className='bg-sky-500 hover:bg-sky-700 text-white py-1 px-4 rounded-sm'>LINK</a>
                            </div>
                            
                        )
                    }
                </div>

                <div className='w-full flex gap-2 items-center mt-auto bg-white/80 py-2 px-4 rounded-full'>
                    
                         <progress value={novedad.progreso} max="100" className='w-full'></progress>
                    <p className='text-sm font-medium'>{novedad.progreso}%</p>   
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Novedad