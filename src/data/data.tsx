import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Skills",
    url: "/skills",
  },
  {
    id: 4,
    text: "Projects",
    url: "/projects",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    text: "Linkedin",
    icon: <FaLinkedin size={30} className="mr-[-10px] lg:mr-0 duration-300" />,
    color: "#717788",
    url: "https://www.linkedin.com/in/elias-de-bock-312261180/",
  },
  {
    id: 2,
    text: "Github",
    color: "#2D0F16",
    icon: <FaGithub size={30} className="mr-[-10px] lg:mr-0 duration-500" />,
    url: "https://github.com/Eliasdb",
  },
  {
    id: 3,
    text: "Email",
    color: "#A5ABBD",
    icon: (
      <HiOutlineMail size={30} className="mr-[-10px] lg:mr-0 duration-500" />
    ),
    url: "mailto:elias.db3@gmail.com",
  },
  {
    id: 4,
    text: "Resume",
    color: "#5D3A40",
    icon: (
      <BsFillPersonLinesFill
        size={30}
        className="mr-[-10px] lg:mr-0 duration-500"
      />
    ),
    url: "www.google.com?q=put_it_here",
  },
];

export const skills = [
  {
    id: 1,
    text: "HTML",
    url: HTML,
  },
  {
    id: 2,
    text: "CSS",
    url: CSS,
  },
  {
    id: 3,
    text: "Javascript",
    url: JS,
  },
  {
    id: 4,
    text: "Node",
    url: Node,
  },

  {
    id: 5,
    text: "Tailwind",
    url: Tailwind,
  },

  {
    id: 6,
    text: "React",
    url: React,
  },
];
