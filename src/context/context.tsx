import { createContext, useContext, useState, useRef } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const [theme, setTheme] = useState("dark");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <GlobalContext.Provider
      value={{
        lightMode,
        setLightMode,
        theme,
        setTheme,
        isSidebarOpen,
        setIsSidebarOpen,
        handleSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
