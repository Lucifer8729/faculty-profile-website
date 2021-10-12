import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import jsImg from "../../assets/js.svg";
import Course from "../../components/Course/Course";

import * as utils from "../../components/UI/utils";

const courses = [
  {
    id: "1",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "2",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "3",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "4",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "5",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "6",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "7",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "8",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
];

const CoursePage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Course");
    return () => utils.removeActiveClassInLinks("Course");
  }, []);

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
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
        mt={15}
        sx={{ pr: 25, pl: 25 }}
      >
        {courses.map((course, i) => (
          <Grid item key={i} xs={12} md={3}>
            <Course {...course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursePage;
