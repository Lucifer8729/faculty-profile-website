import React from "react";
import backgroundImage from "../../assets/bgImg.png";

import { Box } from "@mui/material";

import "./styles.css";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <Box className="text-box">
        <Box className="hello">Hello!</Box>
        <Box className="arrow-down"></Box>
        <Box className="heading">
          <h1>I am Dr. Uma Mohan A Professor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            viverra neque tellus, quis viverra nulla semper vitae.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
