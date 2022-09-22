import {} from "@fortawesome/free-regular-svg-icons";
import {faMosquito, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Box, Stack, Typography} from "@mui/material";
import ClapIcon from "@src/images/handClap";
import {
  BlackColor,
  GrayColor,
  PurpleColor,
  WhiteColor
} from "@src/shared/colors";

const BugSelect = () => {
  const BugModal = ({
    text,
    icon
  }: {
    text: string;
    icon: IconDefinition | any;
  }) => {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        minHeight="50%"
        minWidth="30%"
        border={"solid 1px " + PurpleColor}
        sx={{
          cursor: "pointer",
          backgroundColor: BlackColor,
          transition: "0.3s",
          "& svg, & p": {
            color: PurpleColor,
            fill: PurpleColor,
            transition: "0.2s"
          },
          "&:hover": {
            border: "solid 10px " + WhiteColor,
            backgroundColor: GrayColor,
            "& svg, & p": {color: WhiteColor, fill: WhiteColor}
          }
        }}
      >
        <Box sx={{"& svg": {height: "200px"}}}>
          {icon}
        </Box>
        <Typography textAlign={"center"} color={WhiteColor} fontSize="32px">
          {text}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap="64px"
      width="100vw"
      height="100vh"
      position="absolute"
      top="0"
    >
      <BugModal
        text="Yeah, i think squitos are pretty cool"
        icon={<FontAwesomeIcon icon={faMosquito} color={WhiteColor} />}
      />
      <BugModal text="ew" icon={<ClapIcon />} />
    </Stack>
  );
};

export default BugSelect;
