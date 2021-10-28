import { Button, Card, CardContent, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import classes from "./Course.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#3ABCFF",
    },
  },
});

const Course = (props) => {
  const { id, title, units, materials, img } = props;

  return (
    <Card
      raised
      sx={{
        mb: "2",
        borderRadius: "10px",
        backgroundColor: "#0080ff",
        color: "#fff",
        // height: 220,
      }}
      className={classes.card}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "1" }}>
          {title}
        </Typography>
        <Typography variant="caption">{`${units} units  |  ${materials} materials`}</Typography>
        <br />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            sx={{
              pt: 0.5,
              pb: 0.5,
              mt: 12,
              // borderRadius: "10px",
              "&: hover": { bgcolor: "#ffffff" },
            }}
            href={`/coursepage/${id}`}
            // onClick={() => console.log("Clicked")}
          >
            View
          </Button>
        </ThemeProvider>

        <img src={img} alt="course-img" className={classes["course-img"]} />
      </CardContent>
    </Card>
  );
};

export default Course;
