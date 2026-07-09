import React from 'react'
import ascImagen from '../../assets/asc-imagen.png';

const DatosPresentacion = () => {
  return (
    <div className="flex items-center text-white gap-5">
      <h2 className="font-semibold text-2xl">
        <span className="md:inline font-semibold">Porfolio web</span>

        <span className="font-light md:hidden text-lg"> | ASC</span>
        <span className="hidden md:inline font-light text-lg"> | Alejandro Soler Cruz</span>
      </h2>

      <div className="w-10 h-10 rounded-full">
        <img 
          src={ascImagen} 
          alt="Imagen de Alejandro Soler Cruz" 
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DatosPresentacion;