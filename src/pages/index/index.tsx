import Particles from "react-tsparticles";

const Index = () => {
  return (
    <Particles
        id="tsparticles"
        options={{
          background: {
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
          fullScreen: {
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onDiv: {
                selectors: '#repulse-div',
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
                parallax: {
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              grab: {
                distance: 400,
              },
              slow: {
                factor: 1,
                radius: 0,
              },
            },
          },
          particles: {
            color: {
              value: 'green',
            },
            links: {
              color: {
                value: 'green',
              },
              distance: 150,
              enable: true,
              opacity: 0.4,
              shadow: {
                color: {
                  value: 'lime',
                },
              },
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              options: {
                character: [
                  {
                    fill: true,
                    font: 'Font Awesome 5 Brands',
                    style: '',
                    value: ['🌲'],
                    weight: '400',
                  },
                  {
                    fill: true,
                    font: 'Font Awesome 5 Free',
                    style: '',
                    value: ['🌳'],
                    weight: '900',
                  },
                  {
                    fill: true,
                    font: 'Font Awesome 5 Free',
                    style: '',
                    value: ['🍃'],
                    weight: '900',
                  },
                ],
                char: [
                  {
                    fill: true,
                    font: 'Font Awesome 5 Brands',
                    style: '',
                    value: ['🌲'],
                    weight: '400',
                  },
                  {
                    fill: true,
                    font: 'Font Awesome 5 Free',
                    style: '',
                    value: ['🌳'],
                    weight: '900',
                  },
                  {
                    fill: true,
                    font: 'Font Awesome 5 Free',
                    style: '',
                    value: ['🍃'],
                    weight: '900',
                  },
                ],
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
              },
              type: 'char',
            },
            size: {
              value: 16,
              animation: {
                speed: 10,
                minimumValue: 10,
              },
            },
            stroke: {
              width: 1,
              color: {
                value: '#ffffff',
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    sync: true,
                  },
                },
              },
            },
          },
        }}
      />
  );
};

export default Index;
