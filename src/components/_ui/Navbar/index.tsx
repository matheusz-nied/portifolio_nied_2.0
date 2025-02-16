"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu
import { FaCode } from "react-icons/fa"; // Ícone exemplo
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" relative text-white p-4 w-full  shadow-md ">
      <div className=" mx-auto flex items-center justify-between  pr-0 sm:pr-16">
        
        {/* Logo e Nome */}
        <Link href="/">

        <div className="flex items-center gap-2">
          <FaCode className="text-4xl text-[#03C303]" />
          <span className="text-xl font-bold">Matheusz Nied</span>
        </div>
        </Link>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-8 text-lg">
        <li><Link href="/#" className="hover:text-[#03C303] transition">Início</Link></li>
        <li><Link href="/#skills" className="hover:text-[#03C303] transition">Skills</Link></li>
        <li><Link href="/#projects" className="hover:text-[#03C303] transition">Projetos</Link></li>
          <li><Link href="/#contact" className="hover:text-[#03C303] transition">Contato</Link></li>
        </ul>

        {/* Menu Hambúrguer - Mobile */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile - aparece quando ativo */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <li><Link href="/#"  className="block w-full text-center py-2 hover:bg-gray-700 rounded">Início</Link></li>
          <li><Link href="/#skills" className="block w-full text-center py-2 hover:bg-gray-700 rounded">Sobre</Link></li>
          <li><Link href="/#projects"  className="block w-full text-center py-2 hover:bg-gray-700 rounded">Serviços</Link></li>
          <li><Link href="/#contact" className="block w-full text-center py-2 hover:bg-gray-700 rounded">Contato</Link></li>
        </ul>
      )}
    </nav>
  );
}
