import React, { useState } from "react";

import { Box, Grid, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

import profilePic from "../../assets/sampleProfilePic.png";
import "./styles.css";
import ProfileButton from "../../components/UI/Button";
import About from "../../components/About/About";
import Education from "../../components/Education/Education";
import Skill from "../../components/Skill/Skill";
import { EducationForms } from "../../components/Forms/ProfileForms";

import { useDispatch, useSelector } from "react-redux";

import * as utils from "../../components/UI/utils";
import Header from "../../components/Header/Header";
import { fetchProfile } from "../../redux/profile/profile.actions";

const ProfilePage = () => {
  const [profileActiveTab, setProfileActiveTab] = useState({
    tab1: "1",
    tab2: "",
    tab3: "",
  });
  const education = useSelector((state) => state.profileReducer.Education);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    utils.addActiveClassInLinks("Profile");
    return () => utils.removeActiveClassInLinks("Profile");
  }, []);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: "#EEEEEE",
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Grid container mt={20} direction="row" justifyContent="center">
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <img src={profilePic} width="100%" height="auto" alt="profilepic" />
            <div className="profile-pic-style-div">
              <div style={{ height: "6vw", backgroundColor: "#2BCDFF" }}></div>
              <div style={{ height: "6vw", backgroundColor: "#3ABCFF" }}></div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ marginLeft: "10%" }}>
              <ProfileButton
                onClick={() => {
                  setProfileActiveTab({ tab1: "1", tab2: "", tab3: "" });
                }}
                value={profileActiveTab.tab1}
                className="button-click"
              >
                About Me
              </ProfileButton>
              <ProfileButton
                onClick={() => {
                  setProfileActiveTab({ tab1: "", tab2: "1", tab3: "" });
                }}
                value={profileActiveTab.tab2}
                className="button-click"
              >
                Education
              </ProfileButton>
              <ProfileButton
                onClick={() => {
                  setProfileActiveTab({ tab1: "", tab2: "", tab3: "1" });
                }}
                value={profileActiveTab.tab3}
                className="button-click"
              >
                Skills
              </ProfileButton>
            </Box>
            {profileActiveTab.tab1 === "1" && <About title="My Story" />}
            {profileActiveTab.tab2 === "1" && (
              <Box sx={{ overflowY: "auto", height: "60vh" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 2, ml: "10%" }}
                  startIcon={<AddIcon />}
                  onClick={handleOpen}
                >
                  ADD
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box>
                    <EducationForms close={handleClose} />
                  </Box>
                </Modal>
                {education.map((e, i) => (
                  <Education
                    key={i}
                    id={i}
                    degree={e.degree}
                    year={e.year}
                    institute={e.institute}
                  />
                ))}
              </Box>
            )}
            {profileActiveTab.tab3 === "1" && <Skill />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfilePage;
