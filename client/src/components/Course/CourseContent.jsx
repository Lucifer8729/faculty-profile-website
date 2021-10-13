import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import classes from "./CourseContent.module.css";

import courseImg from "../../assets/js.svg";

import * as utils from "../../components/UI/utils";
import ProfileButton from "../UI/Button";
import Overview from "./Overview/Overview";
import Document from "./Document/Document";

const documents = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "October 12, 2021",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "October 12, 2021",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "October 12, 2021",
  },
];

const CourseContent = () => {
  const [courseActiveTab, setCourseActiveTab] = useState({
    tab1: "1",
    tab2: "",
    tab3: "",
    tab4: "",
    tab5: "",
    tab6: "",
  });

  useEffect(() => {
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
      <Paper
        className={classes["header-box"]}
        sx={{ backgroundColor: "#0080ff", color: "#fff", borderRadius: "15px" }}
      >
        <Typography variant="h3">Programming In Javascript</Typography>
        <img
          src={courseImg}
          alt="Course Img"
          className={classes["course-img"]}
        />
      </Paper>

      <Grid
        mt={4}
        container
        sx={{
          width: "64%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "1",
                tab2: "",
                tab3: "",
                tab4: "",
                tab5: "",
                tab6: "",
              });
            }}
            value={courseActiveTab.tab1}
            className="button-click"
          >
            Overview
          </ProfileButton>
        </Grid>
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "",
                tab2: "1",
                tab3: "",
                tab4: "",
                tab5: "",
                tab6: "",
              });
            }}
            value={courseActiveTab.tab2}
            className="button-click"
          >
            Unit 1
          </ProfileButton>
        </Grid>
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "",
                tab2: "",
                tab3: "1",
                tab4: "",
                tab5: "",
                tab6: "",
              });
            }}
            value={courseActiveTab.tab3}
            className="button-click"
          >
            Unit 2
          </ProfileButton>
        </Grid>
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "",
                tab2: "",
                tab3: "",
                tab4: "1",
                tab5: "",
                tab6: "",
              });
            }}
            value={courseActiveTab.tab4}
            className="button-click"
          >
            Unit 3
          </ProfileButton>
        </Grid>
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "",
                tab2: "",
                tab3: "",
                tab4: "",
                tab5: "1",
                tab6: "",
              });
            }}
            value={courseActiveTab.tab5}
            className="button-click"
          >
            Unit 4
          </ProfileButton>
        </Grid>
        <Grid item xs={12} md={2}>
          <ProfileButton
            type="course"
            onClick={() => {
              setCourseActiveTab({
                tab1: "",
                tab2: "",
                tab3: "",
                tab4: "",
                tab5: "",
                tab6: "1",
              });
            }}
            value={courseActiveTab.tab6}
            className="button-click"
          >
            Unit 5
          </ProfileButton>
        </Grid>
        {courseActiveTab.tab1 === "1" && (
          <Grid item xs={12}>
            <Overview title="About This Course" />
          </Grid>
        )}
        {courseActiveTab.tab2 === "1" &&
          documents.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              xs={12}
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab3 === "1" &&
          documents.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              xs={12}
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab4 === "1" &&
          documents.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              xs={12}
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab5 === "1" &&
          documents.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              xs={12}
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab6 === "1" &&
          documents.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              xs={12}
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CourseContent;
