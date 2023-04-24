import { projects } from "../data/data";

const Work = () => {
  return (
    <div className="w-full custom-height-projects dark:text-gray-300 text-[#0a192f] pb-20 dark:bg-[#0a192f] bg-[#b4ccef]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 dark:text-gray-200 text-[#0a192f] border-[#A5ABBD]">
            Projects
          </p>
          <p className="py-6">// Check out my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 lg:grid-cols-3 space">
          {/* grid item */}
          {projects.map((project) => {
            const { id, image, text, demo, code } = project;
            return (
              <div
                key={id}
                style={{ backgroundImage: `url(${image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div dark:hover:!bg-dark hover:!bg-light"
              >
                <div className="opacity-0 group-hover:opacity-100 text-center">
                  <span className="text-2xl font-bold text-white dark:text-[#03070e]">
                    {text}
                  </span>
                  <div className="pt-8 text-center">
                    <a target="blank" href={demo}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={code}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#0a192f] font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Work;
