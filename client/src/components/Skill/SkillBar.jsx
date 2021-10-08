import React from "react";

import { Grid } from "@mui/material";

import classes from "./Skill.module.css";

const SkillBar = ({ skill, percent }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Grid item>
          <h3>{skill}</h3>
        </Grid>
        <Grid item>
          <p>{percent}%</p>
        </Grid>
      </Grid>
      <div className={classes["skill-bar"]}>
        <div
          style={{
            backgroundColor: "#3ABCFF",
            width: `${percent}%`,
            height: "8px",
            borderRadius: "50px",
          }}
        ></div>
      </div>
    </>
  );
};

export default SkillBar;
