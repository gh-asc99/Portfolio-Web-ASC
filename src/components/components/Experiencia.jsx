import React from "react";
import NombreIcono from "./NombreIcono.jsx";

const Experiencia = (props) => {
  const funciones = props.funciones;

  const estiloComponente = props.destacado === 'true' ? 'flex flex-col md:flex-row gap-5 border-2 px-4 py-2 justify-between md:items-center rounded-sm bg-blue-200' : 'flex flex-col md:flex-row gap-5 border-2 px-4 py-2 justify-between md:items-center rounded-sm bg-gray-300';

  return (
    <div className={`shadow-xl ${estiloComponente}`}>
      <div className="flex flex-col gap-3">
        <p><span className="font-semibold">Puesto: </span> <span className={props.destacado === 'true' && ('font-bold text-blue-600')}>{props.puesto}</span></p>
        <div id="funciones">
          <p className="font-semibold">Funciones del puesto:</p>
        <ul>
          {funciones.length > 0 ? (
            funciones.map((funcion) => <li className="pl-6 flex gap-3"><span className={props.destacado === 'true' ? ('text-blue-600 font-black block') : ('font-black')}>·</span> {funcion}</li>)
          ) : (
            <p>No se han especificado las funciones.</p>
          )}
        </ul>
        </div>
        
      </div>
      <div className="flex flex-col gap-5 w-80">
        <NombreIcono nombre={props.empresa} icono={props.logo} />
        <p>
          Desde <span className="font-semibold">{props.fechaInicio}</span> hasta <span className="font-semibold">{props.fechaFinal}</span>.
        </p>
      </div>
    </div>
  );
};

export default Experiencia;
