import React from "react";

import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import classes from "./Skill.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteSkill } from "../../redux/profile/profile.actions";

const SkillBar = ({ skill, percent, id }) => {
  const skillList = useSelector((state) => state.profileReducer.SkillList);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSkill(id, skillList));
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Grid item>
          <h3 style={{ display: "inline" }}>{skill}</h3>
          <IconButton
            size="small"
            sx={{
              // position: "absolute",
              transform: "translate(0%, -10%)",
              color: "#747474",
            }}
            onClick={handleClick}
          >
            <HighlightOffIcon />
          </IconButton>
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
