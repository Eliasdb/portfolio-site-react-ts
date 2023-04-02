import { createContext, FC, useContext, useState } from "react";
export type GlobalContent = {
  darkMode: boolean;
  setDarkMode: (arg0: boolean) => void;
  theme: string;
  setTheme: (arg0: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (arg0: boolean) => void;
  handleSidebar: () => void;
};
const GlobalContext = createContext<GlobalContent>();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext: FC = ({ children }) => {
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
