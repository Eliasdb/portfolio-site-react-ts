import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import VantaWrapperDark from "./components/VantaWrapperDark";
import VantaWrapperLight from "./components/VantaWrapperLight";
import Work from "./components/Work";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => setLightMode(!lightMode);

  return (
    <div className={lightMode ? "" : "dark"}>
      {lightMode ? (
        <>
          <VantaWrapperLight>
            <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
            <Home />
            <About />
            <Skills />
            <Work />
          </VantaWrapperLight>
        </>
      ) : (
        <>
          <VantaWrapperDark>
            <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
            <Home />
            <About />
            <Skills />
            <Work />
          </VantaWrapperDark>
        </>
      )}
    </div>
  );
}

export default App;
