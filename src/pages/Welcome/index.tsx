import {Box} from "@mui/material";
import BackVideo from "@src/pages/Welcome/BackVideo";
import { WhiteColor } from "@src/shared/colors";
import { useState } from "react";
import Particles from "react-tsparticles";
import BugSelect from "./BugSelect";

const Welcome = () => {
  const [currentColor, setCurrentColor] = useState(WhiteColor);

  return (
    <Box sx={{overflow: "hidden"}}>
      <BackVideo currColor={currentColor} />
      <BugSelect setColor={setCurrentColor} />
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
          },
        }}
      />
    </Box>
  );
};

export default Welcome;
