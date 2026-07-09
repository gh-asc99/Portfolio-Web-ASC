import React from "react";
import ascImagen from "../assets/asc-imagen.png";
import NombreIcono from "../components/components/NombreIcono";

import javacriptIcon from "../assets/languages/javascript-icon.png";
import javaIcon from "../assets/languages/java-icon.png";
import typescriptIcon from "../assets/languages/typescript-icon.png";
import phpIcon from "../assets/languages/php-icon.png";

import reactIcon from "../assets/others/react-icon.png";
import nodejsIcon from "../assets/others/nodejs-icon.png";
import phpstormIcon from "../assets/others/phpstorm-icon.png";
import angularIcon from "../assets/others/angular-icon.png";
import netbeansIcon from "../assets/others/netbeans-icon.png";
import tailwindcssIcon from "../assets/others/tailwindcss-icon.png";

import mysqlIcon from "../assets/databases/mysql-icon.png";
import mariadbIcon from "../assets/databases/mariadb-icon.png";
import postgresqlIcon from "../assets/databases/postgresql-icon.png";
import mongodbIcon from "../assets/databases/mongodb-icon.png";

const DatosPersonales = () => {
  return (
    <div className="flex flex-col gap-8  md:px-0">
      <h2 className="text-2xl font-semibold underline">Datos personales</h2>

      {/* SECCIÓN FOTO Y BIOGRAFÍA: Columna en móvil, fila a partir de md. Centrado en móvil. */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center text-center md:text-left">
        <img
          src={ascImagen}
          alt="Alejandro Soler Cruz"
          className="shadow-2xl w-40 h-40 md:w-50 md:h-50 rounded-full border-2 object-cover"
        />
        <div className="flex flex-col w-full gap-3">
          <p>
            Un cordial saludo,{" "}
            <span className="font-semibold">
              soy Alejandro Soler cruz, desarrollador Full-Stack
            </span>
            .
          </p>
          <p>
            Soy de Elda (Alicante, CP: 03600) y poseo permiso de conducir de
            tipo B además de vehículo propio.
          </p>
          <p>
            Soy una{" "}
            <span className="font-semibold">
              persona motivada, responsable y proactiva
            </span>{" "}
            con ganas de aportar mis conocimientos como desarrollador full-stack
            y aptitudes laborales a las empresas en las que trabajo. Además
            estoy en un aprendizaje constante y{" "}
            <span className="font-semibold">
              sigo ampliando cada día mis conocimientos como desarrollador de
              forma autodidacta
            </span>
            .
          </p>
          <p>
            Tras terminar el bachiller científico y concluir mi grado
            universitario en la universidad de Alicante, descubrí mi verdadera
            pasión: la informática y el desarrollo de aplicaciones. Por ello mis
            estudios posteriores se han focalizado en formarme en este sector.{" "}
            <span className="font-semibold">
              Siendo mi última formación el grado superior en DAW.
            </span>
          </p>
          <p className="font-semibold text-sky-500">
            Tengo disponibilidad de jornada completa y estoy abierto a
            desplazamiento e inserción inmediata.
          </p>
        </div>
      </div>

      {/* CONTENEDOR DE HERRAMIENTAS */}
      <div className="shadow-xl w-full border-2 border-solid border-gray-500 bg-gray-300 px-4 md:px-6 pt-4 pb-4 rounded-sm">
        <p className="pb-4 text-center md:text-left">
          Estas son las herramientas con las que tengo experiencia:
        </p>
        
        {/* LAS TRES COLUMNAS: Se apilan verticalmente en móvil (flex-col) y se ponen en fila en pantallas grandes (md:flex-row) */}
        <div className="w-full flex flex-col md:flex-row gap-5">
          
          {/* LENGUAJES */}
          <div id="lenguajes" className="w-full bg-gray-500 px-4 py-2 rounded-sm">
            <h3 className="text-white mb-2 text-sm md:text-base font-medium">
              Lenguajes de programación...
            </h3>
            <div className="border-2 rounded-sm border-gray-700 py-2 px-4 h-48 overflow-auto bg-gray-200">
              <ul className="flex flex-col gap-2">
                <li>
                  <NombreIcono nombre="JavaScript" icono={javacriptIcon} />
                </li>
                <li>
                  <NombreIcono nombre="Java" icono={javaIcon} />
                </li>
                <li>
                  <NombreIcono nombre="TypeScript" icono={typescriptIcon} />
                </li>
                <li>
                  <NombreIcono nombre="PHP" icono={phpIcon} />
                </li>
              </ul>
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div id="frameworks" className="w-full bg-gray-500 px-4 py-2 rounded-sm">
            <h3 className="text-white mb-2 text-sm md:text-base font-medium">
              Frameworks, IDEs...
            </h3>
            <div className="border-2 rounded-sm border-gray-700 py-2 px-4 h-48 overflow-auto bg-gray-200">
              <ul className="flex flex-col gap-2">
                <li>
                  <NombreIcono nombre="React" icono={reactIcon} />
                </li>
                <li>
                  <NombreIcono nombre="Node.js" icono={nodejsIcon} />
                </li>
                <li>
                  <NombreIcono nombre="PHPStorm" icono={phpstormIcon} />
                </li>
                <li>
                  <NombreIcono nombre="Angular" icono={angularIcon} />
                </li>
                <li>
                  <NombreIcono nombre="NetBeans" icono={netbeansIcon} />
                </li>
                <li>
                  <NombreIcono nombre="TailwindCSS" icono={tailwindcssIcon} />
                </li>
              </ul>
            </div>
          </div>

          {/* BASES DE DATOS */}
          <div id="bases-datos" className="w-full bg-gray-500 px-4 py-2 rounded-sm">
            <h3 className="text-white mb-2 text-sm md:text-base font-medium">
              Bases de datos...
            </h3>
            <div className="border-2 rounded-sm border-gray-700 py-2 px-4 h-48 overflow-auto bg-gray-200">
              <ul className="flex flex-col gap-2">
                <li>
                  <NombreIcono nombre="MySQL" icono={mysqlIcon} />
                </li>
                <li>
                  <NombreIcono nombre="MariaDB" icono={mariadbIcon} />
                </li>
                <li>
                  <NombreIcono nombre="PostgreSQL" icono={postgresqlIcon} />
                </li>
                <li>
                  <NombreIcono nombre="MongoDB" icono={mongodbIcon} />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <p className="text-center md:text-left">
        Además tengo experiencia usando lenguajes de marcas como{" "}
        <span className="font-semibold">HTML5</span> /{" "}
        <span className="font-semibold">XML</span> y manejando reglas de estilo
        con <span className="font-semibold">CSS avanzado (scss/sass)</span>.
      </p>
    </div>
  );
};

export default DatosPersonales;