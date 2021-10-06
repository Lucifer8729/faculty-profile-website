import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import profilePic from "../../assets/sampleProfilePic.png";
import "./styles.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState({ tab1: "", tab2: "", tab3: "" });
  return (
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
        <Grid item xs={12} sm={3} sx={{ position: "relative" }}>
          <img src={profilePic} width="100%" height="auto" alt="profilepic" />
          <div className="profile-pic-style-div">
            <div style={{ height: "6vw", backgroundColor: "#2BCDFF" }}></div>
            <div style={{ height: "6vw", backgroundColor: "#3ABCFF" }}></div>
          </div>
        </Grid>
        <Grid item xs={4} sx={{ bgcolor: "blue" }}>
          about
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
