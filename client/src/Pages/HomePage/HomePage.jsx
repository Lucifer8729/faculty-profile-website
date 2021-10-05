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
      <Box className="hello">Hello</Box>
    </Box>
  );
};

export default HomePage;
