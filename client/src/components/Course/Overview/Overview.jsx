import { Box } from "@mui/system";
import React from "react";

import classes from "./Overview.module.css";

const Overview = (props) => {
  return (
    <Box className={classes.box}>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut
        sagittis mollis.
      </p>
    </Box>
  );
};

export default Overview;
