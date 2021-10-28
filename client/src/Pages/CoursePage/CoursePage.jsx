import React from "react";
import { Grid, Card, CardContent, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

import jsImg from "../../assets/js.svg";
import Course from "../../components/Course/Course";

import * as utils from "../../components/UI/utils";

import { AddNewCourseForm } from "../../components/Forms/CourseForms";

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
  {
    id: "9",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "10",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
  {
    id: "11",
    title: "Programming In Javascript",
    units: "5",
    materials: "2",
    img: jsImg,
  },
];

const CoursePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Box sx={{ height: "75vh", overflowY: "auto", pt: 5 }} mt={15}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          // mt={15}
          sx={{ pr: 25, pl: 25 }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <Card
              // raised
              sx={{
                pt: 8,
                pb: 8,
                borderRadius: "10px",
                border: "2px dashed #0080ff",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <IconButton
                  variant="contained"
                  size="large"
                  sx={{
                    border: "2px dashed #0080ff",
                    color: "#0080ff",
                    "&: hover": { bgcolor: "#0080ff", color: "white" },
                  }}
                  onClick={handleOpen}
                >
                  <AddIcon sx={{ fontsize: "large" }} />
                </IconButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box>
                    <AddNewCourseForm close={handleClose} />
                  </Box>
                </Modal>
              </CardContent>
            </Card>
          </Grid>
          {courses.map((course, i) => (
            <Grid item key={i} xs={12} md={6} lg={3}>
              <Course {...course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CoursePage;
