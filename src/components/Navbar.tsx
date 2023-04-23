import mp4Dark from "../assets/dark-logo.mp4";
import mp4Light from "../assets/light-logo.mp4";

import { links, socials } from "../data/data";

import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

import { NavLink, Link } from "react-router-dom";

import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { darkMode, setDarkMode, setTheme, isSidebarOpen, handleSidebar } =
    useGlobalContext();

  const toggleDarkMode = () => {
    setDarkMode(true);
    setTheme("dark");
  };
  const toggleLightMode = () => {
    setDarkMode(false);
    setTheme("light");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 dark:text-gray-300 text-[#0a192f] z-20 dark:bg-[#0a192f] bg-[#b4ccef]">
      <div>
        {darkMode ? (
          <NavLink to="/">
            <video width="77" autoPlay muted>
              <source src={mp4Dark} type="video/mp4" />
            </video>
          </NavLink>
        ) : (
          <Link to="/">
            <video width="77" autoPlay muted>
              <source src={mp4Light} type="video/mp4" />
            </video>
          </Link>
        )}
      </div>
      {/* links */}
      <ul className="hidden md:flex">
        {links.map(({ id, url, text }) => (
          <li key={id}>
            <NavLink
              to={url}
              className={`group dark:text-gray-300 text-[#0a192f] font-bold transition duration-300 ${
                darkMode ? "color-active-dark" : "color-active"
              }`}
            >
              {text}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#A5ABBD]"></span>
            </NavLink>
          </li>
        ))}
      </ul>
      {darkMode ? (
        <button onClick={toggleLightMode}>
          <MdOutlineLightMode size={25} />
        </button>
      ) : (
        <button onClick={toggleDarkMode}>
          <MdDarkMode size={25} />
        </button>
      )}

      {/* hamburger */}
      <div onClick={handleSidebar} className="md:hidden z-10">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          isSidebarOpen
            ? "absolute top-0 left-0 w-full h-screen dark:bg-[#0a192f] bg-[#b4ccef] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        {links.map((link) => (
          <li className="py-6 text-4xl" key={link.id}>
            <NavLink
              to={link.url}
              onClick={handleSidebar}
              className={`${darkMode ? "color-active-dark" : "color-active"}`}
            >
              {link.text}
            </NavLink>
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
                className="w-[80px] md:w-[142px] lg:w-[160px] h-[40px] md-[50px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 rounded-2xl"
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
