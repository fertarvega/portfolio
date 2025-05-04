import React, { FC, useState } from "react";
import "./../styles/components/ProjectsSection.css";

interface ProjectBoxProps {
  title: string;
  description: string;
  color?: string; // Propiedad opcional para el color del holograma
}

const ProjectsSection: FC<ProjectBoxProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hologramColorClass = `hover:shadow-[0_0_15px_5px_teal]`; // Tailwind para el efecto holográfico

  return (
    <div
      className={`relative p-6 border-2 border-teal-500 rounded-lg bg-teal-300/30 transition-shadow duration-300 ${hologramColorClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`hologram-lines`}
      ></div>
      {/* Efecto de borde brillante al pasar el ratón */}
      {isHovered && (
        <>
          <div
            className={`absolute inset-0 border-2 border-teal-300 rounded-lg animate-pulse`}
          ></div>
          <div
            className={`absolute inset-0 border border-teal-100 rounded-lg animate-pulse delay-150`}
          ></div>
        </>
      )}

      <h3 className={`text-xl font-bold text-teal-400 mb-4`}>{title}</h3>
      <p className={`text-teal-200 leading-relaxed`}>{description}</p>
    </div>
  );
};

export default ProjectsSection;
