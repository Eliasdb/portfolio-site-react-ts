import { createContext, useContext, useState, useRef } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const [theme, setTheme] = useState("dark");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
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
