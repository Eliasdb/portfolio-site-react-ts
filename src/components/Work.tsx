import WorkImg from "../assets/workImg.jpeg";
import RealEstateImg from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#A5ABBD]">
            Projects
          </p>
          <p className="py-6">// Check out my recent work</p>
        </div>

        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking wider">
                React App
              </span>
              <div className="">
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
