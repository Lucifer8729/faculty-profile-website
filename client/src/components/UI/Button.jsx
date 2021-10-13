import React from "react";
import { Box } from "@mui/system";
import classes from "./Button.module.css";

const ProfileButton = (props) => {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <Box
      className={props.type === "course" ? classes["course-box"] : classes.box}
    >
      <button
        className={
          props.value === "1" ? classes[props.className] : classes.button
        }
        onClick={handleClick}
      >
        {props.children}
      </button>
      <div
        className={props.value === "1" ? classes["arrow-down"] : undefined}
      ></div>
    </Box>
  );
};

export default ProfileButton;
