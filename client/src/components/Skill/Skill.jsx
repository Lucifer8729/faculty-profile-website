import React from "react";
import { Box } from "@mui/system";

import classes from "./Skill.module.css";

const Skill = (props) => {
  return (
    <Box className={classes.box}>
      <h1>My Skills</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut
        sagittis mollis. Etiam viverra, eros in venenatis eleifend, tortor purus
        fringilla orci, in pulvinar lectus sem vel ligula.
      </p>
    </Box>
  );
};

export default Skill;
