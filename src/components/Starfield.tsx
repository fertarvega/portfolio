import { FC, useEffect, useRef, useState } from "react";
import "./../styles/components/Starfield.css";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
}

interface StarfieldProps {
  numberOfStars?: number;
}

const Starfield: FC<StarfieldProps> = ({ numberOfStars = 200 }) => {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numberOfStars]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            opacity: star.opacity,
          }}
        ></div>
      ))}
      <div className="hologram-lines"></div>
    </div>
  );
};

export default Starfield;
