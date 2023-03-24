import mp4Dark from "../assets/dark-logo.mp4";
import mp4Light from "../assets/light-logo.mp4";

import { links, socials } from "../data/data";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useState } from "react";

const Navbar = ({ toggleTheme, lightMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300 z-50">
      <div>
        {lightMode ? (
          <video width="77" autoPlay muted>
            <source src={mp4Light} type="video/mp4" />
          </video>
        ) : (
          <video width="77" autoPlay muted>
            <source src={mp4Dark} type="video/mp4" />
          </video>
        )}
      </div>
      {/* links */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li key={link.id}>{link.text}</li>
        ))}
      </ul>
      <button onClick={toggleTheme}>
        {lightMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
      </button>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          isSidebarOpen
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        {links.map((link) => (
          <li className="py-6 text-4xl" key={link.id}>
            {link.text}
          </li>
        ))}
      </ul>

      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0 	">
        <ul>
          {socials.map((social) => {
            const { id, text, icon, url, color } = social;
            return (
              <li
                key={id}
                className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] md-[50px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500"
                style={{ background: color }}
              >
                <a
                  className="flex justify-between items-center w-full text-gray-300 font-bold"
                  href={url}
                >
                  {text} {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
