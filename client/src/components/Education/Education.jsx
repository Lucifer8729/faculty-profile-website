import React from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import classes from "./Education.module.css";

const Education = (props) => {
  const handleClick = () => {
    console.log(props.id);
  };

  return (
    <Box className={classes.box}>
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          transform: "translate(-90%, -10%)",
          color: "red",
        }}
        onClick={handleClick}
      >
        <HighlightOffIcon />
      </IconButton>
      <h3>{props.degree}</h3>
      <p className={classes.date}>{props.year}</p>
      <p className={classes.body}>{props.institute}</p>
    </Box>
  );
};

export default Education;
