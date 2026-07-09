import React from "react";
import TecnologiasProyecto from "./TecnologiasProyecto";

const Proyecto = ({ proyecto }) => {
  return (
    <div
      className={`shadow-xl border-2 w-full text-white rounded-sm  ${proyecto.borde_color1}`}
      style={{ backgroundImage: `url(${proyecto.fondo})` }}
    >
      <div className="bg-black/50 w-full rounded-sm px-6 py-4 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row w-full gap-3">
          <div className="w-full bg-black/60 px-4 py-2 rounded-sm border border-white/40">
            <p className="hidden md:inline font-semibold">
              Nombre de la app:{" "}
              <span className={`font-bold ${proyecto.texto_color2}`}>
                {proyecto.titulo}
              </span>
            </p>
            <p className="md:hidden font-semibold">
              Nombre App:{" "}
              <span className={`font-bold ${proyecto.texto_color2}`}>
                {proyecto.titulo}
              </span>
            </p>
            <img
              src={proyecto.logo}
              alt={`Logo de ${proyecto.titulo}`}
              className="w-60 my-4"
            />
            <p>{proyecto.desc_breve}</p>
          </div>
          <div className="w-full">
            <TecnologiasProyecto
              tecnologias={proyecto.tecnologias}
              colorBorde={proyecto.borde_color1}
              colorLetra={proyecto.texto_color1}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full bg-black/60 border border-white/30 rounded-sm px-4 py-2">
            {proyecto.destacados && proyecto.destacados.length > 0 ? (
              <>
                <p className={`font-bold pb-2 ${proyecto.texto_color1}`}>
                  Puntos relevantes:
                </p>
                <ul className={`${proyecto.fondo_color1} py-2 px-4 rounded-sm`}>
                  {proyecto.destacados.map((punto) => (
                    <li key={punto.id} className="flex gap-3">
                      <span className={`block font-bold ${proyecto.texto_color1}`}>
                        ·
                      </span>{" "}
                      {punto.contenido}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No hay puntos destacados en este proyecto.</p>
            )}
          </div>

          <div className="w-full flex flex-col justify-end items-end">

            <small className="mb-2"><em>Fecha de publicación: <span className="font-semibold">{proyecto.fecha_publicacion}</span></em> </small>

            <div className="flex gap-2 pb-2 text-sm items-center">
              <p className="hidden md:inline">Echa un vistazo a la app pulsando en </p>
              <p className="md:hidden">Prueba la app aquí </p>
              <a
                href={proyecto.enlace}
                target="_blank"
                className={`bg-white font-semibold px-2 py-1 rounded-sm ${proyecto.texto_color2} border-2 ${proyecto.border_color2}`}
              >
                Come With Me <span className="font-semibold text-black/80 text-base">App</span>
              </a>
            </div>

            <div className="flex gap-2 pb-2 text-sm items-center">
              <p className="hidden md:inline">Puedes consultar el repositorio github de la app pulsando en </p>
              <p className="md:hidden">Consultar repositorio aquí </p>
              <a
                href={proyecto.github}
                target="_blank"
                className={`bg-white font-semibold px-2 py-1 rounded-sm ${proyecto.texto_color1} border-2 ${proyecto.border_color1}`}
              >
                Come With Me <span className="font-semibold text-black/80 text-base">Github</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
