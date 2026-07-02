import React from 'react'
import ascImagen from '../../assets/asc-imagen.png';

const DatosPresentacion = () => {
  return (
    <div className="flex justify-between">
      <h2>
        Portfolio web |{" "}
        <span className="font-light">Alejandro Soler Cruz</span>
      </h2>
      <div className="w-10 h-10 rounded-full">
        <img src={ascImagen} alt="Imagen de Alejandro Soler Cruz" className='rounded-full w-full h-full object-cover'/>
      </div>
    </div>
  );
};

export default DatosPresentacion;
