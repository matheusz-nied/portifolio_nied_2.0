"use client";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col justify-center text-start">
        <div className="flex flex-col items-center justify-center xl:mt-10 px-1">
          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-thin">
            Hello,
            <span className="text-[#29c31b]"> Matheus </span>
            aqui
          </h1>
          <div className="flex my-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bold font-semibold text-white w-auto h-auto text-center">
            Back-end e Front-end developer
          </div>
          <p className="text-base text-gray-400 text-center sm:max-w-[50%] my-6 max-w-[80%]">
            Sou um engenheiro de computação se capacitando em criar e projetar
            soluções tecnológicas e digitais para resoluções de problemas, com foco em
            soluções web.
          </p>
          <div className="flex justify-between w-[20rem] md:w-[24rem]">
            <a
              className="px-0 mt-6 border rounded-sm w-36 text-white flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
              href="/pdf/curriculo.pdf"
              download
            >
              Download CV{" "}
              <IoMdDownload className="ml-1" width={20}  />
            </a>
            <a
              href="#skills"
              className="p-3 mt-6 border rounded-sm w-36 bg-[#03C303] text-slate-950 font-medium border-transparent flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
            >
              Saber mais
            </a>
          </div>
          <div className="flex flex-row text-3xl text-white gap-4 mt-16">
            <a
              href="https://www.linkedin.com/in/matheusz-nied/"
              className="hover:-translate-y-2 hover:text-[#0a66c2] transition-all ease duration-700"
              target="_blank"
            >
              {" "}
              <RxLinkedinLogo />
            </a>
            <a
              href="https://github.com/matheusz-nied"
              className="hover:-translate-y-2 transition-all ease duration-700"
              target="_blank"
            >
              {" "}
              <RxGithubLogo />
            </a>
            <a
              href="https://www.instagram.com/matheusz.nied"
              className="hover:-translate-y-2 hover:text-[#cf31a5] transition-all ease duration-700"
              target="_blank"
            >
              {" "}
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
