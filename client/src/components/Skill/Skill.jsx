import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

import SkillBar from "./SkillBar";

import classes from "./Skill.module.css";

const skillList = [
  ["HTML/CSS", "80"],
  ["C/C++", "90"],
  ["Javascript", "95"],
  ["Python", "90"],
  // ["HTML/CSS", "80"],
];

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
      <Box sx={{ overflowY: "auto", height: "30vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {skillList.map((skill, i) => (
            <Grid item key={i} xs={6} sx={{ pr: 2 }}>
              <SkillBar skill={skill[0]} percent={skill[1]} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skill;
