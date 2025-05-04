import { useRef, useEffect, useCallback, useState } from "react";
import SectionOne from "./components/SectionOne";

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
      <section className="snap-start w-screen h-screen bg-blue-200 flex-shrink-0 flex items-center justify-center">
        <SectionOne />
      </section>
      <section className="snap-start w-screen h-screen bg-green-200 flex-shrink-0 flex items-center justify-center">
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
