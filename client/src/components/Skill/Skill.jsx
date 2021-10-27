import React from "react";
import { Box } from "@mui/system";
import { Grid, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

import SkillBar from "./SkillBar";
import { SkillForms } from "../Forms/ProfileForms";

import classes from "./Skill.module.css";

import { useSelector } from "react-redux";

const Skill = () => {
  const skillList = useSelector((state) => state.profileReducer.SkillList);
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
        <Box>
          <SkillForms close={handleClose} />
        </Box>
      </Modal>
      <h1>My Skills</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut
        sagittis mollis. Etiam viverra, eros in venenatis eleifend, tortor purus
        fringilla orci, in pulvinar lectus sem vel ligula.
      </p>
      <Box sx={{ overflowY: "auto", height: "30vh", position: "relative" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {skillList.map((skill, i) => (
            <Grid item key={i} xs={6} sx={{ pr: 2 }}>
              <SkillBar id={i} skill={skill[0]} percent={skill[1]} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skill;
