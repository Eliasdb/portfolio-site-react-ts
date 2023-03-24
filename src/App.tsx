import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VantaWrapperDark from "./components/VantaWrapperDark";
import VantaWrapperLight from "./components/VantaWrapperLight";

function App() {
  const [lightMode, setLightMode] = useState(true);

  const toggleTheme = () => setLightMode(!lightMode);

  return (
    <div>
      {lightMode ? (
        <VantaWrapperLight>
          <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
          <Home />
          <About />
        </VantaWrapperLight>
      ) : (
        <VantaWrapperDark>
          <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
          <Home />
          <About />
        </VantaWrapperDark>
      )}
    </div>
  );
}

export default App;
