"use client";
import React from "react";
import { ButtonAnimate } from "../../components/_ui/button-animate";
import { ButtonGreen } from "../../components/_ui/button-green";
import GradientText from "@/components/GradientText/GradientText";
import SocialIcons from "@/components/_ui/icon-social";

const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center h-lvh w-full z-[20]">
      <div className="h-full w-full flex flex-col justify-center text-start">
        <div className="flex flex-col items-center justify-center xl:mt-0s px-1">
          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-thin">
            Hello, <GradientText> Matheus </GradientText> aqui
          </h1>
          <div className="flex my-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bold font-semibold text-white w-auto h-auto text-center">
            Back-end e Front-end developer
          </div>
          <p className="text-base text-gray-400 text-center sm:max-w-[50%] my-6 max-w-[80%]">
            Sou um engenheiro de computação se capacitando em criar e projetar
            soluções tecnológicas e digitais para resoluções de problemas, com foco em
            soluções web.
          </p>
          <div className="flex justify-between mt-12 w-[20rem] md:w-[24rem]">
            <ButtonAnimate url="/files/curriculo-lates.pdf" >Download CV</ButtonAnimate>
            <ButtonGreen url="#skills" classname=" min-w-36 h-12">Saber mais</ButtonGreen>


          </div>
          <SocialIcons/>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
