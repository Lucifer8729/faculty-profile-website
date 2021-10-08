import { Box } from "@mui/system";
import React from "react";

import classes from "./Education.module.css";

const Education = (props) => {
  return (
    <Box className={classes.box}>
      <h3>{props.degree}</h3>
      <p className={classes.date}>{props.year}</p>
      <p className={classes.body}>{props.institute}</p>
    </Box>
  );
};

export default Education;
