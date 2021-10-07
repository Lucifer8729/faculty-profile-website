import React from "react";
import classes from "./Button.module.css";

const ProfileButton = (props) => {
  return (
    <button className={`${classes.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default ProfileButton;
