import React from "react";
import { Box } from "@mui/system";

import classes from "./About.module.css";

const About = (props) => {
  return (
    <Box className={classes.box}>
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut
        sagittis mollis.
      </p>
      <p>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          viverra neque tellus.
        </strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut
        sagittis mollis. Etiam viverra, eros in venenatis eleifend, tortor purus
        fringilla orci, in pulvinar lectus sem vel ligula. In elementum id ipsum
        vel scelerisque.
      </p>
    </Box>
  );
};

export default About;
