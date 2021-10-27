import React from "react";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

import classes from "./About.module.css";

import { AboutForms } from "../Forms/ProfileForms";

import { useSelector } from "react-redux";

const About = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const aboutMe = useSelector((state) => state.profileReducer.AboutMe);
  // console.log(aboutMe);

  return (
    <Box className={classes.box}>
      <IconButton
        sx={{
          color: "#0080ff",
          position: "absolute",
          transform: "translate(-110%, 10%)",
        }}
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <AboutForms close={handleClose} />
        </Box>
      </Modal>
      <h1>{props.title}</h1>
      <p>{aboutMe.header}</p>
      <p>
        <strong>{aboutMe.quote}</strong>
      </p>
      <p>{aboutMe.detail}</p>
    </Box>
  );
};

export default About;
