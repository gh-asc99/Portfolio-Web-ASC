import React from 'react'
import NombreIcono from './NombreIcono'

const TecnologiasProyecto = ({tecnologias, colorBorde, colorLetra}) => {
  return (
    <div className={`border-2 ${colorBorde} p-3 bg-gray-700 w-full rounded-sm text-black`}>
        <p className={`pb-2 font-semibold ${colorLetra}`}>Desarrollado con:</p>

        <div className="px-4 py-2 bg-gray-500 rounded-sm">
          {tecnologias.length > 0 ? (
            <ul className="grid grid-cols-3 gap-4 w-full">
              {tecnologias.map((tecn) => (
                <li key={tecn.id}>
                  <NombreIcono
                  nombre={tecn.nombre}
                  icono={tecn.logo}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay un stack de tecnologías registrado.</p>
          )}
        </div>

    </div>
  )
}

export default TecnologiasProyecto
