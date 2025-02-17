import GradientText from "@/components/GradientText/GradientText";
import SkillCard from "@/components/SkillCard/SkillCard";
import SkillsData from "@/data/skills";
import React from "react";


export default function Proficiency() {

  
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 id="skills" className="font-bold text-center mb-8"><GradientText className="text-5xl font-bold">{SkillsData.title}</GradientText></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 mt-16">
        {SkillsData.skills.map((project) => (
          <SkillCard
            key={project.id}
            title={project.title}
            description={project.description}
            techs={project.techs}
            image={project.image}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
}
