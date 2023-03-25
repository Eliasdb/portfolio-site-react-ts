import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { useState, useEffect, useRef } from "react";

const VantaWrapperDark = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#717788",
          backgroundColor: "#0a192f",
          showDots: false,

          // zIndex: 2,
          points: 8.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={myRef}>{children}</div>;
};
export default VantaWrapperDark;
