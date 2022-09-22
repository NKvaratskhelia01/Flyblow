import {Box} from "@mui/material";
import {BlackColor, PurpleColor} from "@src/shared/colors";

const BackVideo = () => {
  return (
    <Box sx={{overflow: "hidden"}}>
      <Box height="100vh">
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            backgroundColor: BlackColor,
            mixBlendMode: "saturation",
          }}
        />
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            backgroundColor: BlackColor,
            mixBlendMode: "color-burn",
            opacity: "0.8",
          }}
        />
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          sx={{
            backgroundColor: PurpleColor,
            mixBlendMode: "overlay",
          }}
        />
        <video loop autoPlay muted>
          <source src="./videos/blueGoo.mp4" />
        </video>
      </Box>
    </Box>
  );
};

export default BackVideo;
