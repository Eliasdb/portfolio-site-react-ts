import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

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
    duration: 1.5,
  };

  const { darkMode } = useGlobalContext();
  return (
    <>
      <div
        className={
          darkMode
            ? "dark dark:bg-[#0a192f] flex flex-col justify-between container-height"
            : "bg-[#b4ccef] flex flex-col justify-between container-height"
        }
      >
        <Header />
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-20 flex"
        >
          <Outlet />
        </motion.div>
        <Footer bgColor="dark:bg-[#0a192f] bg-[#b4ccef]" />
      </div>
    </>
  );
};
export default SharedLayout;
