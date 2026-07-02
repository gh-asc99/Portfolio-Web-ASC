import React from "react";
import DatosPresentacion from "../components/DatosPresentacion.jsx";
import Menu from "../menu/Menu.jsx";

const Cabecera = () => {
  return (
    <header className="flex top-0 w-full h-16">
      <DatosPresentacion />
      <Menu />
    </header>
  );
};

export default Cabecera;
