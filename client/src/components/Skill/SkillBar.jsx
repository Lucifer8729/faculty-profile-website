import React from "react";

import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import classes from "./Skill.module.css";

const SkillBar = ({ skill, percent }) => {
  const handleClick = () => {
    console.log(skill);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            transform: "translate(-90%, 40%)",
            color: "#747474",
          }}
          onClick={handleClick}
        >
          <HighlightOffIcon />
        </IconButton>
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
