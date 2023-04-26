import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import WorkImg from "../assets/workImg.jpeg";
import GPT from "../assets/gpt-n.png";
import Jobster from "../assets/jab.png";
import Vanilla from "../assets/mmenu.png";
import Cocktail from "../assets/cockt.png";

import CSSProjects from "../assets/css-p.png";

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
];

export const projects = [
  {
    id: 1,
    text: "Lendert's Garage",
    image: WorkImg,
    demo: "",
    code: "",
  },
  {
    id: 2,
    text: "Jobster",
    image: Jobster,
    demo: "https://job-tracker-rtk.netlify.app/",
    code: "https://github.com/Eliasdb/jobtracker-RTK",
  },
  {
    id: 3,
    text: "GPT-3.5-Turbo",
    image: GPT,
    demo: "https://gpt-demo-edb.netlify.app/",
    code: "https://github.com/Eliasdb/GPT-3.5-Turbo-chatbot",
  },
  {
    id: 4,
    text: "Vanilla JS Fundamentals",
    image: Vanilla,
    demo: "https://js-fundamentals-edb.netlify.app/",
    code: "https://github.com/Eliasdb/vanilla-js-fundamentals",
  },
  {
    id: 5,
    text: "CSS Layout Practice",
    image: CSSProjects,
    demo: "https://css-projects-edb.netlify.app/",
    code: "https://github.com/Eliasdb/css-projects",
  },
  {
    id: 6,
    text: "Cocktails API",
    image: Cocktail,
    demo: "https://cocktail-api-vanilla.netlify.app/",
    code: "https://github.com/Eliasdb/cocktail-api-exercise",
  },
];
