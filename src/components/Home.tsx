import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-40">
        <p className="text-[#3a4658] dark:text-gray-300 duration-1000 home">
          Hi, my name is
        </p>
        <h1
          className="text-4xl sm:text-7xl font-bold text-[#0a192f]
          dark:text-[#A5ABBD] duration-1000 home font-[Lato]"
        >
          Elias De Bock
        </h1>
        <TypeAnimation
          className="custom-type-animation-cursor text-4xl sm:text-7xl font-black	  text-[#717788] dark:text-[#717788] home font-[Lato]"
          sequence={[
            1500,
            // "I am a",
            // 500,
            "I am a Frontend Developer.",
            200,
            (el) => el.classList.remove("custom-type-animation-cursor"),
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="h2"
          speed={30}
          cursor={false}
          repeat={0}
        ></TypeAnimation>
        <TypeAnimation
          className="text-[#0a192f] dark:text-[#A5ABBD] py-4 max-w-[700px] duration-1000 home"
          sequence={[
            4000,
            "Just some text to make sure the animation is fluent and does what it is supposed to do. Also this should be here eventually: Objective? What do I have to offer? What do I want out of this? My value proposition.",
            100,
            (el) => el.classList.remove("custom-type-animation-cursor"),
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="p"
          speed={50}
          cursor={false}
          repeat={0}
        ></TypeAnimation>
        <p className=""></p>
        <div>
          <Link to="/projects">
            <button className="dark:text-white text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A5ABBD] hover:border-gray-800 dark:border-[#233044] dark:hover:bg-[#A5ABBD] dark:hover:opacity-90 border-[#0a192f]">
              View projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
