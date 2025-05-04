const SectionOne = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900 w-full max-w-[2000px]">
      <article className="flex flex-row justify-between items-center w-1/2">
        <div className="flex flex-col text-left align-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¡Hola! me llamo Fernando Tarango. 🎮
          </h2>
          <p className="text-[20px] text-gray-300">
            Soy{" "}
            <span className="text-[#dd00e9] font-bold">desarrollador web</span>{" "}
            y{" "}
            <span className="text-[#eb5b00] font-bold">
              desarrollador de videojuegos
            </span>
            <span className="font-cursive"> (algunas veces). </span>
          </p>
          <p className="text-[20px] text-gray-300">
            Me gusta encontrar soluciones a problemas difíciles y aprender en el
            proceso.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/public/images/profile.avif"
            alt="Profile picture"
            className="rounded-full"
            width="240"
            height="240"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionOne;
