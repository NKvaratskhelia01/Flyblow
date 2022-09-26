import {faMosquito, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Box, Stack, Typography, useTheme} from "@mui/material";
import ClapIcon from "@src/images/handClap";
import {
  BlackColor,
  CyanColor,
  GrayColor,
  OrangeColor,
  WhiteColor
} from "@src/shared/colors";
import {Dispatch, SetStateAction} from "react";
import {setCookie} from "cookies-next";

const BugSelect = ({
  setColor
}: {
  setColor: Dispatch<SetStateAction<string>>;
}) => {
  const theme = useTheme();

  const BugModal = ({
    text,
    icon,
    color
  }: {
    text: string;
    icon: IconDefinition | any;
    color: string;
  }) => {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        border={"solid 1px " + color}
        onMouseEnter={() => setColor(color)}
        onMouseLeave={() => setColor(WhiteColor)}
        onClick={() => setCookie("chosenColor", true)}
        sx={{
          width: "700px",
          height: "350px",
          cursor: "pointer",
          backgroundColor: BlackColor,
          transition: "0.3s",
          "& svg, & p": {
            color: color,
            fill: color,
            transition: "0.2s"
          },
          "&:hover": {
            border: "solid 10px " + WhiteColor,
            backgroundColor: GrayColor,
            "& svg, & p": {color: WhiteColor, fill: WhiteColor}
          },
          [theme.breakpoints.down("xl")]: {
            width: "540px"
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
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column"
        }
      }}
    >
      <BugModal
        text="Yeah, i think squitos are pretty cool"
        icon={<FontAwesomeIcon icon={faMosquito} />}
        color={CyanColor}
      />
      <BugModal text="ew" icon={<ClapIcon />} color={OrangeColor} />
    </Stack>
  );
};

export default BugSelect;
