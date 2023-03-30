import ParticlesConfig from "../config/ParticlesConfig";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const Background = () => {
  const { theme } = useGlobalContext();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const [particlesContainer, setParticlesContainer] = useState();

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  return (
    <div id="particle-background" className="home">
      <div className="background">
        <Particles
          theme={theme}
          id="tsparticles"
          particlesLoaded="particlesLoaded"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesConfig}
        />
      </div>
    </div>
  );
};

export default Background;
