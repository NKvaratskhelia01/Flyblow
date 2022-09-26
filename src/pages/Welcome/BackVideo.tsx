import {Box} from "@mui/material";

const BackVideo = ({currColor}:{currColor: string}) => {
  return (
    <Box sx={{overflow: "hidden"}}>
      <Box height="100vh">
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            transition: "all 0.4s",
            backgroundColor: currColor,
            mixBlendMode: "color-burn",
          }}
        />
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            transition: "all 0.4s",
            backgroundColor: currColor,
            mixBlendMode: "color-dodge",
            opacity: "0.2"
          }}
        />
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            transition: "all 0.4s",
            backgroundColor: currColor,
            mixBlendMode: "overlay",
          }}
        />
        <video loop autoPlay muted>
          <source src="./videos/goo.mp4" />
        </video>
      </Box>
    </Box>
  );
};

export default BackVideo;
