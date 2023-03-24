import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VantaWrapper from "./components/VantaWrapper";
import VantaWrapper2 from "./components/VantaWrapper2";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => setLightMode(!lightMode);

  return (
    <div>
      {lightMode ? (
        <VantaWrapper>
          <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
          <Home />
          <About />
        </VantaWrapper>
      ) : (
        <VantaWrapper2>
          <Navbar toggleTheme={toggleTheme} lightMode={lightMode} />
          <Home />
          <About />
        </VantaWrapper2>
      )}
    </div>
  );
}

export default App;
