import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "./Navbar";
import Background from "./Background";

const SharedLayout = () => {
  const { lightMode } = useGlobalContext();
  return (
    <div className={lightMode ? "" : "dark"}>
      <Navbar />
      <Outlet />
      <Background />
    </div>
  );
};
export default SharedLayout;
