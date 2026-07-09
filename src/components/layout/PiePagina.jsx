import React from "react";
import github from "../../assets/github.png";

const PiePagina = () => {
  return (
    <footer className="w-full flex flex-row items-center justify-between gap-4 md:gap-5 bg-gray-400 px-5 py-4 md:py-0 md:h-16 text-center md:text-left">

      <div className="flex flex-col text-left md:text-center md:flex-row md:gap-6 text-gray-800 ">
        <small className="md:hidden ">
          Portfolio web {" "}
          <span className="font-semibold text-black">Alejandro Soler Cruz</span>
        </small>
        <small className="hidden md:inline">
          Portfolio web oficial de{" "}
          <span className="font-semibold text-black">Alejandro Soler Cruz</span>
        </small>
        <small>
          GitHub: <span className="font-semibold text-black">gh-asc99</span>
        </small>
      </div>

      <a
        href="https://github.com/gh-asc99/Portfolio-Web-ASC.git"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 rounded-full gap-3 items-center border-2 px-4 bg-gray-300 font-semibold text-xs md:text-md shadow-md hover:bg-gray-200 transition-colors duration-200"
      >
        <img
          src={github}
          alt="Repositorio GitHub"
          className="h-6 w-6 object-contain"
        />
        <span>Portfolio-Web-ASC</span>
      </a>
    </footer>
  );
};

export default PiePagina;