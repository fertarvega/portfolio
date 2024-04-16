import "./App.css";
import { Footer } from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Resume from "./components/Resume";
import TechnologiesIcon from "./components/TechnologiesIcon";
import Timeline from "./components/Timeline";
import { technologiesIconsList } from "./utils/icons";
import { carpoolProject, sentinelProject } from "./utils/projectDescriptions";

function App() {
  return (
    <main>
      <Resume />
      <section>
        <div className="text-3xl font-medium text-black mb-5 flex items-center">
          <h3>Languages and Technologies</h3>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {technologiesIconsList.map((icon, index) => (
            <TechnologiesIcon
              key={index}
              iconUrl={icon.iconUrl}
              borderIconWidthSize={icon.borderIconWidthSize}
              borderIconHeighSize={icon.borderIconHeighSize}
              iconHeighSize={icon.iconHeighSize}
              isHome={false}
            ></TechnologiesIcon>
          ))}
        </div>
      </section>
      <section className="mt-12 mb-12 grid lg:grid-cols-2 sm:justify-items-center">
        <ProjectCard projectInfo={carpoolProject}></ProjectCard>
        <ProjectCard projectInfo={sentinelProject}></ProjectCard>
      </section>
      <Timeline />
      <Footer />
    </main>
  );
}

export default App;
