import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/rekt.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node-js.png";
import Redux from "../assets/redux.png";
import SC from "../assets/file-type-styled.svg";
import Typescript from "../assets/typescript-programming-language-icon.png";

import LG from "../assets/LG-final.jpg";
import GPT from "../assets/gpt.jpg";
import Jobster from "../assets/jobster.jpg";
import Vanilla from "../assets/menu.jpg";
import Cocktail from "../assets/cocktail-api.jpg";
import CSSProjects from "../assets/css-projects.jpg";
import TS from "../assets/ts-thumbnail.jpg";

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
    icon: <FaGithub size={30} className="mr-[-10px] lg:mr-0 duration-300" />,
    url: "https://github.com/Eliasdb",
  },
  {
    id: 3,
    text: "Email",
    color: "#A5ABBD",
    icon: (
      <HiOutlineMail size={30} className="mr-[-10px] lg:mr-0 duration-300" />
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
        className="mr-[-10px] lg:mr-0 duration-300"
      />
    ),
    url: "/public/cv.pdf",
  },
];

export const skills = [
  {
    id: 1,
    text: "HTML",
    image: HTML,
  },
  {
    id: 2,
    text: "CSS",
    image: CSS,
  },
  {
    id: 3,
    text: "Javascript",
    image: JS,
  },
  {
    id: 4,
    text: "Node",
    image: Node,
  },

  {
    id: 5,
    text: "Tailwind",
    image: Tailwind,
  },

  {
    id: 6,
    text: "React",
    image: React,
  },
  {
    id: 7,
    text: "Redux Toolkit",
    image: Redux,
  },
  {
    id: 8,
    text: "Styled components",
    image: SC,
  },
  {
    id: 9,
    text: "Typescript",
    image: Typescript,
  },
];

export const projects = [
  {
    id: 1,
    text: "Lendert's Garage",
    image: LG,
    demo: "https://lenderts-garage.netlify.app",
    code: "https://github.com/Eliasdb/ecommerce-react",
  },
  {
    id: 2,
    text: "Jobster",
    image: Jobster,
    demo: "https://job-tracker-rtk.netlify.app",
    code: "https://github.com/Eliasdb/jobtracker-RTK",
  },
  {
    id: 3,
    text: "GPT-3.5-Turbo",
    image: GPT,
    demo: "https://gpt-demo-edb.netlify.app",
    code: "https://github.com/Eliasdb/GPT-3.5-Turbo-chatbot",
  },
  {
    id: 4,
    text: "Vanilla JS Fundamentals",
    image: Vanilla,
    demo: "https://js-fundamentals-edb.netlify.app",
    code: "https://github.com/Eliasdb/vanilla-js-fundamentals",
  },
  {
    id: 5,
    text: "CSS Layout Practice",
    image: CSSProjects,
    demo: "https://css-projects-edb.netlify.app",
    code: "https://github.com/Eliasdb/css-projects",
  },
  {
    id: 6,
    text: "Cocktails API",
    image: Cocktail,
    demo: "https://cocktail-api-vanilla.netlify.app",
    code: "https://github.com/Eliasdb/cocktail-api-exercise",
  },
  {
    id: 7,
    text: "Typescript projects",
    image: TS,
    demo: "https://typescript-projects-edb.netlify.app",
    code: "https://github.com/Eliasdb/typescript-only-projects",
  },
];
