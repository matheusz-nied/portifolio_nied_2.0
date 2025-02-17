"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface SkillCardProps {
  title: string;
  description: string;
  techs: string;
  image: string;
  skills: { name: string; icon: string }[];
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  techs,
  image,
  skills,
  className = "",
  spotlightColor = "rgba(0, 224, 0, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-lg border border-neutral-700 bg-black-500 overflow-hidden p-6 shadow-lg transition-transform ${className}`}
    >
      {/* Efeito de iluminação */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Ícone grande ou imagem */}
      <div className="flex justify-center">
        <div className="w-21 h-21 flex items-center justify-center rounded-full border border-gray-600 overflow-hidden p-4">
          <Image src={image} alt={title} width={84} height={84} className="object-contain" />
        </div>
      </div>

      {/* Título e descrição principal */}
      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>

      {/* Ícones de habilidades */}
      <div className="flex justify-center gap-3 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-2 rounded-full border border-gray-600  w-12 h-12 flex items-center justify-center">
            <Image src={skill.icon} alt={skill.name} width={30} height={30} className="object-contain" />
          </div>
        ))}
      </div>

      {/* Descrição extra */}
      <p className="text-gray-300 text-center text-sm mt-4">
        {description}
      </p>
      <p className="text-gray-400 text-center text-sm mt-4">{techs}</p>
    </div>
  );
};

export default SkillCard;
