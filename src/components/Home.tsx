import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Background from "./Background";

const Home = () => {
  return (
    <main className="w-full flex custom-height">
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
          className="custom-type-animation-cursor text-4xl sm:text-7xl font-black text-[#717788] dark:text-[#717788] home font-[Lato]"
          sequence={[
            2700,
            // "I am a",
            // 500,
            "I am a Frontend Developer.",
            2000,
            (el) => el?.classList.remove("custom-type-animation-cursor"),
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="h2"
          speed={30}
          cursor={false}
          repeat={0}
        />

        <p className="dark:text-[#A5ABBD] py-4 max-w-[700px] text-[#0a192f] font-[Lato]">
          Having started my journey in the wondrous world of web development in
          2019, I am ready for the next step in my career. I am an ambitious and
          passionate web developer with an eagerness to learn and improve
          continuously. Looking for an environment to grow and take my skills to
          the next level.
        </p>
        <Link to="/projects" className="max-w-[184px]">
          <button className="max-w-[184px] dark:text-white hover:text-gray-300 text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0a192f] hover:border-gray-800 dark:border-gray-300  dark:hover:bg-[#A5ABBD] dark:hover:opacity-90 border-[#0a192f] rounded-xl dark:bg-[#0a192f] bg-[#b4ccef]">
            View projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
      <Background />
    </main>
  );
};
export default Home;
