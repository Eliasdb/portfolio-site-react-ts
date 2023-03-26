import WorkImg from "../assets/workImg.jpeg";
import RealEstateImg from "../assets/realestate.jpg";
import { projects } from "../data/data";

const Work = () => {
  return (
    <div className="w-full md:h-screen dark:text-gray-300 text-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 dark:text-gray-300 text-[#0a192f] border-[#A5ABBD]">
            Projects
          </p>
          <p className="py-6">// Check out my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* grid item */}
          {projects.map((project) => {
            const { id, image, text } = project;
            return (
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100 text-center">
                  <span className="text-2xl font-bold text-white tracking-wider ">
                    {text}
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
