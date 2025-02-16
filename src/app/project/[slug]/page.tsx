import ProjectsData from "@/data/projects";
import { cx } from "@/utils";

import styles from '../../../components/SpotlightCard/skill-card.module.scss';
import { CarouselDemo } from "./carousel";
import GradientText from "@/components/GradientText/GradientText";
import Navbar from "@/components/_ui/Navbar";


export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    
  const project = ProjectsData.items.find((p) => p.id === Number(slug));

  if (!project) {
    return <div className="text-center text-red-500 text-xl mt-10">Projeto não encontrado!</div>;
  }

  return (
    <>
        <Navbar />
    
      <div className=" mx-auto sm:p-6 max-w-5xl mb-16">
        <div className=" shadow-lg rounded-sm overflow-hidden p-0">
        <div className="flex justify-center items-center mb-6">

            <CarouselDemo images={project.images} />
          </div>
          {/* <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="w-full h-96 object-cover rounded-sm"
          /> */}
          <div className="p-6">

          <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mt-4 mb-2">
            {project.skills.map((skill, index) => (
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
          {
            project.linkSite && (
                <div>Site:  <a href={project.linkSite} target="_blank" className="text-green-500 hover:underline">Visitar site</a></div>

            )
          }
          {
              project.linkSite && (
                <div>GitHub:  <a href={project.linkGit} target="_blank" className="text-green-500 hover:underline">Visitar código no github</a></div>
                
            )
          }      
                    {/* <p className="text-gray-300 mt-2">{project.description}</p> */}
                    <p className="text-gray-300 mt-4"><span className="font-bold"><GradientText>Problema: </GradientText> </span>{project.description}</p>
                    <p className="text-gray-300 mt-2"><span className="font-bold"><GradientText>Solução: </GradientText>  </span>{project.description}</p>
                    

              <div className="mt-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                <span>{project.contractType}</span>
              </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
