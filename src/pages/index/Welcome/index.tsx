import {Box} from "@mui/material";
import BackVideo from "@src/pages/index/Welcome/BackVideo";
import { WhiteColor } from "@src/shared/colors";
import { useState } from "react";
import BugSelect from "./BugSelect";

const Welcome = () => {
  const [currentColor, setCurrentColor] = useState(WhiteColor);

  return (
    <Box sx={{overflow: "hidden"}}>
      <BackVideo currColor={currentColor} />
      <BugSelect currColor={currentColor} setColor={setCurrentColor} />
    </Box>
  );
};

export default Welcome;
