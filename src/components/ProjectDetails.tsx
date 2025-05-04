import { FC } from "react";
import { IProjectDetails } from "../interfaces/components";

const ProjectDetails: FC<IProjectDetails> = ({ project, color = "teal" }) => {
  return (
    <div
      className={`relative p-6 border-2 border-${color}-500 rounded-lg bg-${color}-300/30 overflow-hidden`}
    >
      {/* <div className="hologram-lines"></div> */}
      <div className="relative z-10">
        <h3 className={`text-2xl font-bold text-${color}-400 mb-4`}>
          {project.title}
        </h3>

        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="mb-4 rounded-lg w-full object-cover max-h-60"
          />
        )}

        <p className={`text-${color}-200 leading-relaxed mb-4`}>
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className={`text-xl font-semibold text-${color}-300 mb-2`}>
              Tecnologías:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-${color}-700 rounded-full text-${color}-100 text-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {(project.liveLink || project.repoLink) && (
          <div>
            <h4 className={`text-xl font-semibold text-${color}-300 mb-2`}>
              Enlaces:
            </h4>
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${color}-200 hover:text-white underline transition-colors duration-200`}
                >
                  Ver en vivo
                </a>
              )}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${color}-200 hover:text-white underline transition-colors duration-200`}
                >
                  Repositorio
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
