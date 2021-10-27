import React from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import classes from "./Education.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteDegree } from "../../redux/profile/profile.actions";

const Education = (props) => {
  const education = useSelector((state) => state.profileReducer.Education);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteDegree(props.id, education));
  };

  return (
    <Box className={classes.box} sx={{ position: "relative" }}>
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          transform: "translate(-90%, -10%)",
          color: "#747474",
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
