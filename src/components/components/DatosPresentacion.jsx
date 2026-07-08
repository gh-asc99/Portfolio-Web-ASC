import React from 'react'
import ascImagen from '../../assets/asc-imagen.png';

const DatosPresentacion = () => {
  return (
    <div className="flex items-center text-white gap-5">
      <h2 className='font-semibold'>
        <span className='text-2xl'>Porfolio web</span> {" "}
        <span className="font-light">| Alejandro Soler Cruz</span>
      </h2>
      <div className="w-10 h-10 rounded-full">
        <img src={ascImagen} alt="Imagen de Alejandro Soler Cruz" className='rounded-full w-full h-full object-cover'/>
      </div>
    </div>
  );
};

export default DatosPresentacion;
