"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from './skill-card.module.scss';
import { cx } from "@/utils";
import { ButtonGreen } from "../_ui/button-green";
import Link from "next/link";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  company: string;
  location: string;
  contractType: string;
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title,
  description,
  image,
  link,
  skills,
  className = "",
  spotlightColor = "rgba(0, 224, 0, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <Link href={link} rel="noopener noreferrer">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-lg border border-neutral-700 bg-black overflow-hidden p-0 transition-transform ${className}`}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />

        {/* Card content */}
        <div className="flex flex-col gap-4 h-full">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className=" object-cover w-full h-48"
          />
          <div className="p-6 flex flex-col justify-between h-full">
            <div>


            <h3 className="text-xl font-semibold text-white">{title}</h3>

            <div className="flex flex-wrap gap-2 mt-1 mb-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={cx(
                    'relative block rounded px-2   flex items-center justify-center text-xs duration-500',
                    styles['skill-card']
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400">{description}</p>
            </div>
            <div className="mt-4">
              <ButtonGreen classname=" w-auto h-8" url="">Ver mais</ButtonGreen>
            </div>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default SpotlightCard;