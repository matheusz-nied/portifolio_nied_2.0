import GradientText from "@/components/GradientText/GradientText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ProjectsData from "@/data/projects";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição breve do projeto 1.",
    image: "/images/api-prod-node.png",
    link: "https://github.com/seuusuario/projeto1",
    skills: ["React", "Next.js", "TailwindCSS"],
    company: "Empresa A",
    location: "São Paulo, Brasil",
    contractType: "Full-time",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição breve do projeto 2.",
    image: "/images/Blog.png",
    link: "https://github.com/seuusuario/projeto2",
    skills: ["Node.js", "Express", "MongoDB"],
    company: "Empresa B",
    location: "Rio de Janeiro, Brasil",
    contractType: "Freelancer",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição breve do projeto 3.",
    image: "/images/Chat-Nied.png",
    link: "https://github.com/seuusuario/projeto3",
    skills: ["Vue.js", "Firebase", "TailwindCSS"],
    company: "Empresa C",
    location: "Belo Horizonte, Brasil",
    contractType: "Estágio",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição breve do projeto 4.",
    image: "/images/Checkout.png",
    link: "https://github.com/seuusuario/projeto4",
    skills: ["Python", "Django", "PostgreSQL"],
    company: "Empresa D",
    location: "Porto Alegre, Brasil",
    contractType: "Contrato Temporário",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.Descrição breve do projeto 5.",
    image: "/images/Nied-Notas.png",
    link: "https://github.com/seuusuario/projeto5",
    skills: ["Flutter", "Dart", "Firebase"],
    company: "Empresa E",
    location: "Curitiba, Brasil",
    contractType: "Full-time",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição breve do projeto 6.",
    image: "/images/nied.finance.png",
    link: "https://github.com/seuusuario/projeto6",
    skills: ["Angular", "TypeScript", "SCSS"],
    company: "Empresa F",
    location: "Recife, Brasil",
    contractType: "Freelancer",
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 mt-24 mb-16">
      <h2 className="text-5xl font-bold text-center mb-16"><GradientText>{ProjectsData.title}</GradientText></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <SpotlightCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            skills={project.skills}
            company={project.company}
            location={project.location}
            contractType={project.contractType}
            className="h-full"
          />
        ))}
      </div>
    </section>
  );
}
