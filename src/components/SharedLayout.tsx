import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "./Navbar";
import Background from "./Background";

const SharedLayout = () => {
  const { darkMode } = useGlobalContext();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <Outlet />
      <Background />
    </div>
  );
};
export default SharedLayout;
