import { FC, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { projectsData } from "../helpers/projects";

const ProjectsSection: FC<{ color?: string }> = ({ color = "teal" }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    projectsData[0]?.id || null
  );

  const selectedProject = projectsData.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <section>
      <div
        className={`container mx-auto px-4 border-2 border-${color}-500 rounded-lg p-4 bg-${color}-300/10 md:w-6xl w-full`}
      >
        <h2 className={`text-3xl font-bold text-center text-${color}-400 mb-8`}>
          Proyectos Destacados
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div
              className={`border-2 border-${color}-500 rounded-lg p-4 bg-${color}-300/10`}
            >
              <h3 className={`text-xl font-bold text-${color}-400 mb-4`}>
                Seleccionar Proyecto
              </h3>
              <ul>
                {projectsData.map((project) => (
                  <li
                    key={project.id}
                    className={`cursor-pointer py-2 px-3 rounded transition-colors duration-200 ${
                      selectedProjectId === project.id
                        ? `bg-${color}-500/50 text-white border-l-4 border-white`
                        : `text-${color}-200 hover:bg-${color}-700/30`
                    }`}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* {isHovered && (
            <>
              <div
                className={`absolute inset-0 border-2 border-${color}-300 rounded-lg animate-pulse`}
              ></div>
              <div
                className={`absolute inset-0 border border-${color}-100 rounded-lg animate-pulse delay-150`}
              ></div>
            </>
          )} */}

          <div className="w-full md:w-3/4">
            {selectedProject ? (
              <ProjectDetails project={selectedProject} color={color} />
            ) : (
              <div className={`text-center text-${color}-300`}>
                Selecciona un proyecto para ver los detalles.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
