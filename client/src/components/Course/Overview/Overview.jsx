import { Box } from "@mui/system";
import React from "react";

import classes from "./Overview.module.css";

const Overview = (props) => {
  return (
    <Box className={classes.box}>
      <h1>{props.title}</h1>
      <p>{props.about}</p>
    </Box>
  );
};

export default Overview;
