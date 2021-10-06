import React from "react";
import backgroundImage from "../../assets/bgImg.png";

import { Box, Button, Link, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#3ABCFF",
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
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
            <h1>I am Dr. Uma Mohan</h1>
            <h1> A Professor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              viverra neque tellus, quis viverra nulla semper vitae.
            </p>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2, "&: hover": { bgcolor: "#ffffff" } }}
          >
            View profile
            <ArrowRightAltSharpIcon sx={{ ml: 1 }} />
          </Button>
          <Grid container mt={1} spacing={5}>
            <Grid item>
              <Link href="#" underline="none">
                +FACEBOOK
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">
                +TWITTER
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="none">
                +LINKEDIN
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
