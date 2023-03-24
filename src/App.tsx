import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VantaWrapper from "./components/VantaWrapper";

function App() {
  return (
    <div>
      <VantaWrapper>
        <Navbar />
        <Home />
        <About />
      </VantaWrapper>
    </div>
  );
}

export default App;
