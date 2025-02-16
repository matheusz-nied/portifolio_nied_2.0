import GradientText from "@/components/GradientText/GradientText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ProjectsData from "@/data/projects";
import React from "react";

export default function Projects() {
  return (
    <section className="container mx-auto px-4 mt-24 mb-16">
      <h2 id="projects" className="text-5xl font-bold text-center mb-16"><GradientText>{ProjectsData.title}</GradientText></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.items.map((project) => (
          <SpotlightCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={`/project/${project.id}`}
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
