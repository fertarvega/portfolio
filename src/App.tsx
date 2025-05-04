import { useRef, useEffect, useCallback, useState } from "react";
import SectionOne from "./components/SectionOne";
import ProjectsSection from "./components/ProjectsSection";

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const totalSections = 4;
  const SCROLL_THRESHOLD = 500;

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const container = containerRef.current;
      event.preventDefault();

      const deltaY = event.deltaY;
      setScrollAccumulator((prev) => prev + deltaY);

      if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator > 0 ? 1 : -1;
        const newSection = currentSection + direction;

        if (newSection >= 0 && newSection < totalSections) {
          setCurrentSection(newSection);
          if (container) {
            container.scrollTo({
              left: newSection * window.innerWidth,
              behavior: "smooth",
            });
          }
        }

        setScrollAccumulator(0);
      }
    },
    [currentSection, scrollAccumulator]
  );

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
      style={{ overflow: "auto" }}
    >
      <section className="snap-start w-screen h-screen bg-slate-900 flex-shrink-0 flex items-center justify-center">
        <ProjectsSection
          title={"Test"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        />
      </section>
      <section className="snap-start w-screen h-screen bg-green-200 flex-shrink-0 flex items-center justify-center">
        <SectionOne />
      </section>
      <section className="snap-start w-screen h-screen bg-red-200 flex-shrink-0 flex items-center justify-center">
        Sección 3
      </section>
      <section className="snap-start w-screen h-screen bg-yellow-200 flex-shrink-0 flex items-center justify-center">
        Sección 4
      </section>
    </div>
  );
};

export default HorizontalScroll;
