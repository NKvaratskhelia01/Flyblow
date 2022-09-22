import {Box} from "@mui/material";
import BackVideo from "@src/pages/index/Welcome/BackVideo";
import BugSelect from "./BugSelect";

const Welcome = () => {
  return (
    <Box sx={{overflow: "hidden"}}>
      <BackVideo />
      <BugSelect />
    </Box>
  );
};

export default Welcome;
