import "./../styles/components/Loader.css"

const Loader = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen max-w-80 mx-auto gap-3">
      <article className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Fernando Tarango</h1>
        <h2 className="text-xl font-bold">Portfolio</h2>
      </article>
      <div className="w-full bg-slate-600 h-2 rounded-lg overflow-hidden loading-bar-ctn">
        <div className="loading-bar w-0 h-full bg-white"></div>
      </div>
      <div className="loader"></div>
    </section>
  );
};

export default Loader;
