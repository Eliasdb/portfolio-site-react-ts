const ParticlesConfig = {
  autoplay: true,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true, // enables the click event
        mode: "push", // adds the particles on click
      },
      onHover: {
        enable: true, // enables the hover event
        mode: "repulse", // make the particles run away from the cursor
      },
    },
    modes: {
      push: {
        quantity: 10, // number of particles to add on click
      },
      repulse: {
        distance: 100, // distance of the particles from the cursor
      },
    },
  },
  particles: {
    color: {
      value: "#777",
    },
    links: {
      color: "#777777",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 90,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 1,
    },
  },
  themes: [
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        background: {
          color: "#0a192f",
        },
        particles: {
          color: {
            value: "#717788",
          },
        },
      },
    },
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#b4ccef",
        },
        particles: {
          color: {
            value: "#0a192f",
          },
        },
      },
    },
  ],
  detectRetina: true,
};
export default ParticlesConfig;
