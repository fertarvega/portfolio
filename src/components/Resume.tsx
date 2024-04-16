const Resume = () => {
  return (
    <div className="mb-5 grid grid-cols-3">
      <div className="col-span-2">
        <p className="text-lg mb-5">
          I consider myself a person who has no limits for learning. Learning
          about different things, cultures, technologies, people and ways of
          working is something I really enjoy. My goal is to become a frontend
          developer.
        </p>
        <a
          href="/CV - Fernando Tarango.pdf"
          download
          className="px-7 py-2 text-md text-orange-600 font-semibold rounded-lg border border-orange-400 hover:text-white hover:bg-orange-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
        >
          Download CV
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-48">
          <img
            src="profile-pic.jpg"
            alt="..."
            className="shadow rounded-full align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
