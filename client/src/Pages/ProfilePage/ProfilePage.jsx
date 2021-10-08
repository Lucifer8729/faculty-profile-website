import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import profilePic from "../../assets/sampleProfilePic.png";
import "./styles.css";
import ProfileButton from "../../components/UI/Button";
import About from "../../components/About/About";
import Education from "../../components/Education/Education";
import Skill from "../../components/Skill/Skill";

const education = [
  {
    degree: "Master of Engineering (M.E) in Software Engineering",
    year: "2011 - 2013",
    institute:
      "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
  },
  {
    degree: "Master of Engineering (M.E) in Software Engineering",
    year: "2011 - 2013",
    institute:
      "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
  },
  {
    degree: "Master of Engineering (M.E) in Software Engineering",
    year: "2011 - 2013",
    institute:
      "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
  },
  // {
  //   degree: "Master of Engineering (M.E) in Software Engineering",
  //   year: "2011 - 2013",
  //   institute:
  //     "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
  // },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState({ tab1: "1", tab2: "", tab3: "" });

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
                setActiveTab({ tab1: "1", tab2: "", tab3: "" });
              }}
              value={activeTab.tab1}
              className="button-click"
            >
              About Me
            </ProfileButton>
            <ProfileButton
              onClick={() => {
                setActiveTab({ tab1: "", tab2: "1", tab3: "" });
              }}
              value={activeTab.tab2}
              className="button-click"
            >
              Education
            </ProfileButton>
            <ProfileButton
              onClick={() => {
                setActiveTab({ tab1: "", tab2: "", tab3: "1" });
              }}
              value={activeTab.tab3}
              className="button-click"
            >
              Skills
            </ProfileButton>
          </Box>
          {activeTab.tab1 === "1" && <About />}
          {activeTab.tab2 === "1" && (
            <Box sx={{ overflowY: "auto", height: "60vh" }}>
              {education.map((e, i) => (
                <Education
                  key={i}
                  degree={e.degree}
                  year={e.year}
                  institute={e.institute}
                />
              ))}
            </Box>
          )}
          {activeTab.tab3 === "1" && <Skill />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
