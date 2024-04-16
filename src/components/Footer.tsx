export function Footer() {
  return (
    <footer className="mx-4 mb-4 mt-10">
      <div className="w-full mx-2 max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-lg font-medium text-gray-500 sm:text-center">
          Fernando Tarango
        </span>
        <a href="https://github.com/fertarvega" className="cursor-pointer">
          <div className="w-10 h-10 rounded-full mx-2 ml-4 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
            <img
              src="github.svg"
              alt="..."
              className="h-8 w-max align-middle border-none"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/fertarvega/"
          className="cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
            <img
              src="linkedin.svg"
              alt="..."
              className="h-8 w-max align-middle border-none"
            />
          </div>
        </a>
      </div>
    </footer>
  );
}
