import ParticlesConfig from "../config/ParticlesConfig";
import { Dispatch, SetStateAction, useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles, { IParticlesProps } from "react-tsparticles";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import type { Container, Engine } from "tsparticles-engine";

const Background = () => {
  const { theme } = useGlobalContext();

  // type yo = {
  //   loadTheme: (arg0: string) => void;
  //   currentTheme: string;
  //   setParticlesContainer: Dispatch<SetStateAction<Container | undefined>>;
  // };

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const [particlesContainer, setParticlesContainer] = useState<any | null>(
    null
  );

  const particlesLoaded = useCallback(
    (container: Container | undefined): void => {
      setParticlesContainer(container);
    },
    []
  );

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  return (
    <div id="particle-background" className="home">
      <div className="background home">
        <Particles
          theme={theme}
          id="tsparticles"
          particlesLoaded="particlesLoaded"
          init={particlesInit as IParticlesProps["init"]}
          loaded={particlesLoaded as IParticlesProps["loaded"]}
          options={ParticlesConfig}
        />
      </div>
    </div>
  );
};

export default Background;
