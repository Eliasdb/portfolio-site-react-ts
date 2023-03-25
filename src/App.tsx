import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import VantaWrapperDark from "./components/VantaWrapperDark";
import VantaWrapperLight from "./components/VantaWrapperLight";
import Projects from "./components/Projects";

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
            <Projects />
          </VantaWrapperLight>
        </>
      ) : (
        <>
          <VantaWrapperDark>
            <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
            <Home />
            <About />
            <Skills />
            <Projects />
          </VantaWrapperDark>
        </>
      )}
    </div>
  );
}

export default App;
