import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import HTML from "../assets/html.png";
import Next from "../assets/next-js.svg";
import Sass from "../assets/sass-1.svg";
import Mongo from "../assets/mongodb-icon.svg";
import GraphQL from "../assets/graphql-icon.svg";
import Post from "../assets/postgresql-icon.svg";
import Swift from "../assets/swift.svg";
import SwiftData from "../assets/swiftdata.png";
import SwiftUI from "../assets/swiftui.png";

import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/rekt.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node-js.png";
import Redux from "../assets/redux.png";
import SC from "../assets/file-type-styled.svg";
import Typescript from "../assets/typescript-programming-language-icon.png";

import LG from "../assets/LG-final.jpg";
import Graph from "../assets/graphql.png";
import Octane from "../assets/octane.png";

import GPT from "../assets/gpt.jpg";
import Dawn from "../assets/Dawn.png";

import Jobster from "../assets/jobster.jpg";
import Vanilla from "../assets/menu.jpg";
import Cocktail from "../assets/cocktail-api.jpg";
import CSSProjects from "../assets/css-projects.jpg";
import TS from "../assets/ts-thumbnail.jpg";
import FS from "../assets/fullstack.png";

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
    text: "Blog",
    url: "/blog",
  },
  {
    id: 6,
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
    url: "/edb_cv_25_09.pdf",
  },
];

export const skills = [
  {
    id: 1,
    text: "HTML",
    image: HTML,
    category: "Frontend",
  },
  {
    id: 2,
    text: "CSS",
    image: CSS,
    category: "Frontend",
  },
  {
    id: 3,
    text: "Javascript",
    image: JS,
    category: "Languages",
  },
  {
    id: 4,
    text: "Node",
    image: Node,
    category: "Backend",
  },

  {
    id: 5,
    text: "Tailwind",
    image: Tailwind,
    category: "Frontend",
  },

  {
    id: 6,
    text: "React",
    image: React,
    category: "Frontend",
  },
  {
    id: 7,
    text: "Redux Toolkit",
    image: Redux,
    category: "Frontend",
  },
  {
    id: 8,
    text: "Next.js",
    image: Next,
    category: "Frontend",
  },
  {
    id: 9,
    text: "Typescript",
    image: Typescript,
    category: "Languages",
  },
  {
    id: 9,
    text: "Sass",
    image: Sass,
    category: "Frontend",
  },
  {
    id: 10,
    text: "Mongo DB",
    image: Mongo,
    category: "Backend",
  },
  {
    id: 11,
    text: "GraphQL",
    image: GraphQL,
    category: "Frontend",
  },
  {
    id: 12,
    text: "PostgreSQL",
    image: Post,
    category: "Backend",
  },
  {
    id: 12,
    text: "Swift",
    image: Swift,
    category: "Languages",
  },
  {
    id: 13,
    text: "SwiftData",
    image: SwiftData,
    category: "iOS",
  },

  {
    id: 14,
    text: "SwiftUI",
    image: SwiftUI,
    category: "iOS",
  },
];

export const projects = [
  {
    id: 1,
    text: "Cocktails API",
    image: Cocktail,
    demo: "https://cocktail-api-vanilla.netlify.app",
    code: "https://github.com/Eliasdb/cocktail-api-exercise",
  },
  {
    id: 2,
    text: "CSS Layout Practice",
    image: CSSProjects,
    demo: "https://css-projects-edb.netlify.app",
    code: "https://github.com/Eliasdb/css-projects",
  },
  {
    id: 3,
    text: "Vanilla JS Fundamentals",
    image: Vanilla,
    demo: "https://js-fundamentals-edb.netlify.app",
    code: "https://github.com/Eliasdb/vanilla-js-fundamentals",
  },
  {
    id: 4,
    text: "Typescript projects",
    image: TS,
    demo: "https://typescript-projects-edb.netlify.app",
    code: "https://github.com/Eliasdb/typescript-only-projects",
  },
  {
    id: 5,
    image: GPT,
    text: "GPT-3.5-Turbo",
    demo: "https://gpt-demo-edb.netlify.app",
    code: "https://github.com/Eliasdb/GPT-3.5-Turbo-chatbot",
  },
  {
    id: 6,
    text: "Jobster",
    image: Jobster,
    demo: "https://job-tracker-rtk.netlify.app",
    code: "https://github.com/Eliasdb/jobtracker-RTK",
  },
  {
    id: 7,
    text: "Lendert's Garage",
    image: LG,
    demo: "https://lenderts-garage.netlify.app",
    code: "https://github.com/Eliasdb/ecommerce-react",
  },
  {
    id: 8,
    text: "fullStack - Admin panel",
    image: FS,
    demo: "https://fullstack-admin-space.netlify.app/login",
    code: "https://github.com/Eliasdb/mern-blog-admin",
  },
  {
    id: 9,
    text: "CSS Library in SASS with Next.js",
    image: Octane,
    demo: "https://octane-css-library.netlify.app",
    code: "https://github.com/Eliasdb/sass-css-library",
  },
  {
    id: 10,
    text: "Project Management tool GraphQL",
    image: Graph,
    demo: "https://graphql-project-management.netlify.app",
    code: "https://github.com/Eliasdb/graphql-project-management",
  },

  {
    id: 11,
    text: "Dawn - iOS app",
    image: Dawn,
    demo: "https://github.com/Eliasdb/fitness-app-swift",
    code: "https://github.com/Eliasdb/fitness-app-swift",
  },
];
