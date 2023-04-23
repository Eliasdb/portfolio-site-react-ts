import { createContext, useContext, useState } from "react";
import type { ITheme } from "tsparticles-engine";

export type GlobalContent = {
  darkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
  theme: string | ITheme;
  setTheme: (arg0: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (arg0: boolean) => void;
  handleSidebar: () => void;
};
const GlobalContext = createContext<GlobalContent>({
  darkMode: true,
  setDarkMode: () => {},
  theme: "dark",
  setTheme: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  handleSidebar: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(true);

  const [theme, setTheme] = useState<string>("dark");

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
