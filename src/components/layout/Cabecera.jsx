import React from "react";
import DatosPresentacion from "../components/DatosPresentacion.jsx";
import Menu from "../menu/Menu.jsx";

const Cabecera = () => {
  return (
    <header className="shadow-xl fixed flex items-center justify-between top-0 w-full h-16 z-1000 bg-gray-900 px-5">
      <DatosPresentacion />
      <Menu />
    </header>
  );
};

export default Cabecera;
