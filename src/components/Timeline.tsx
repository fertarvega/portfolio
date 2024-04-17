const Timeline = () => {
  return (
    <main className="mb-12">
      <section>
        <div className="text-3xl font-medium text-black mb-5 flex items-center">
          <h3>Work Experience</h3>
        </div>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <article>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                <p className="text-sm text-neutral-500">Nov 2023 - Current</p>
              </div>
              <div className="ml-4 mt-2 pb-5">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Frontend Developer at The Rocket Code - Principal Financial Group
                </h4>
              </div>
            </article>
          </li>
          <li>
            <article>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                <p className="text-sm text-neutral-500">May 2023 - Current</p>
              </div>
              <div className="ml-4 mt-2 pb-5">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Freelance Fullstack Software Engineer (Part time job)
                </h4>
              </div>
            </article>
          </li>
          <li>
            <article>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                <p className="text-sm text-neutral-500">
                  April 2022 - January 2023
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Software Developer at Secretary of Public Security of
                  Chihuahua (Plataforma Centinela)
                </h4>
              </div>
            </article>
          </li>
          <li>
            <article>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                <p className="text-sm text-neutral-500">May 2023 - July 2023</p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Engineer Internship at ArkusNexus
                </h4>
              </div>
            </article>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default Timeline;
