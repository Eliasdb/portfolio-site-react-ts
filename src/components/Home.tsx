import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-40">
        <p className="text-[#5c6f6d] dark:text-gray-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#334B48] dark:text-[#A5ABBD]">
          Elias De Bock
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold   text-[#3D4756] dark:text-[#717788]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#334B48] dark:text-[#717788] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis
          unde animi rerum, eos corrupti! Minima dolore cum eius, consequuntur
          esse, a tenetur quos dignissimos tempore debitis nesciunt eos
          reiciendis.
        </p>

        <div>
          <button className="dark:text-white text-[#0a192f] group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-800 hover:border-gray-800 dark:border-[#233044] dark:hover:bg-[#233044] dark:hover:opacity-90 border-[#0a192f]">
            View projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
