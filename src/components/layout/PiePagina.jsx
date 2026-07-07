import React from "react";
import github from "../../assets/github.png";

const PiePagina = () => {
  return (
    <footer className="relative flex items-center justify-between w-full h-16 bg-gray-400 px-5">
      <div className="flex gap-5">
        <small>
          Portfolio web oficial de{" "}
          <span className="font-semibold">Alejandro Soler Cruz</span>
        </small>
        <small>
          Consulta todos mis proyectos en mi Github: <span className="font-semibold">gh-asc99</span>
        </small>
      </div>

      <a
        href="https://github.com/gh-asc99/Portfolio-Web-ASC.git"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 rounded-full gap-3 items-center border-2 px-3 bg-gray-300 font-semibold"
      >
        <img
          src={github}
          alt="Repositorios github (gh-asc99)"
          className="h-8"
        />
        <p>Portfolio-Web-ASC</p>
      </a>
    </footer>
  );
};

export default PiePagina;
