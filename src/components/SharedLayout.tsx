import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "./Navbar";
import Background from "./Background";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SharedLayout = () => {
  const { pathname } = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  const { darkMode } = useGlobalContext();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>

      <Background />
    </div>
  );
};
export default SharedLayout;
