import React from "react";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

import classes from "./About.module.css";

import { AboutForms } from "../Forms/ProfileForms";

const About = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <AboutForms close={handleClose} />
      </Modal>
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
