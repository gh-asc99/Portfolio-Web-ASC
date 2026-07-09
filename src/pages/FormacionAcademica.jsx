import React from "react";
import titulosAcademicos from "../assets/datosJSON/titulosAcademicos.json";
import Titulo from "../components/components/Titulo.jsx";
import Idioma from "../components/components/Idioma.jsx";

const FormacionAcademica = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold underline">Formación académica</h2>
      <div className="w-full">
        <p className="pb-2">Mis títulos académicos son los siguientes:</p>
        <div className="shadow-xl px-4 py-2 bg-sky-700/50 rounded-sm">
          {titulosAcademicos.length > 0 ? (
            <ul className="grid md:grid-cols-3 gap-4 w-full">
              {titulosAcademicos.map((tit) => (
                <li key={tit.id}>
                  <Titulo
                    titulo={tit.titulo}
                    tipo={tit.tipo}
                    lugar={`${tit.centro} (${tit.lugar})`}
                    logo={tit.logo}
                    periodo={tit.periodo}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay títulos académicos registrados.</p>
          )}
        </div>
      </div>

      <div className="w-full pt-2">
        <p className="pb-2">
          En cuanto a los idiomas que domino, tengo los siguientes certificados
          oficiales que demuestran mi manejo y control de los mismos{" "}
          <span className="font-semibold">
            (siendo mi idioma nativo el castellano)
          </span>
          :
        </p>
        <div className="flex gap-3">
          <Idioma idioma="Inglés" nivel="B2" origen="Cambridge" />
          <Idioma
            idioma="Valenciano"
            nivel="C1"
            origen="Escuela Oficial de Idiomas"
          />
        </div>
      </div>
    </div>
  );
};

export default FormacionAcademica;
