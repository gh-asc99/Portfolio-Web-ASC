import React from "react";

const NombreIcono = (props) => {
  return (
    <div className="border p-3 rounded-sm border-solid bg-indigo-200">
      <div className="flex gap-3 md:gap-5 w-auto items-center">
        <img
          src={props.icono}
          alt={`Logo de ${props.nombre}`}
          className="rounded-sm bg-white w-10 h-10"
        />
        <p className="w-full inline text-xs md:text-base whitespace-nowrap">{props.nombre}</p>
      </div>
    </div>
  );
};

export default NombreIcono;
