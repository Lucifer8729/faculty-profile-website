import React, { useEffect, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Grid,
  Paper,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Modal,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

import classes from "./CourseContent.module.css";

import courseImg from "../../assets/js.svg";

import * as utils from "../../components/UI/utils";
import ProfileButton from "../UI/Button";
import Overview from "./Overview/Overview";
import Document from "./Document/Document";
import {
  EditOverviewForm,
  UploadMaterialForm,
} from "../Forms/CourseContentForms";

const CourseContent = () => {
  const history = useHistory();
  const courseID = history.location.pathname.substring(12);
  const currentCourse = useSelector(
    (state) => state.courseReducer.Courses[courseID]
  );
  const [courseActiveTab, setCourseActiveTab] = useState({
    tab1: "1",
    tab2: "",
    tab3: "",
    tab4: "",
    tab5: "",
    tab6: "",
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modalOpen, setOpen] = React.useState(false);
  const [modalOpen2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleCloseModal2 = () => setOpen2(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleOpen();
    handleClose();
  };

  const handleUpload = () => {
    handleOpen2();
    handleClose();
  };

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
      {!currentCourse ? <Redirect to="/404" /> : null}

      <Paper
        className={classes["header-box"]}
        sx={{ backgroundColor: "#0080ff", color: "#fff", borderRadius: "15px" }}
      >
        <Typography variant="h3">{`${currentCourse?.title}`}</Typography>
        <img
          src={courseImg}
          alt="Course Img"
          className={classes["course-img"]}
        />
        <IconButton
          id="long-button"
          size="large"
          sx={{ position: "absolute", right: 5, top: 5, color: "white" }}
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ fontSize: "28px" }} />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleEdit}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit Overview</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleUpload}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Upload Material</ListItemText>
          </MenuItem>
        </Menu>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box>
            <EditOverviewForm close={handleCloseModal} />
          </Box>
        </Modal>
        <Modal open={modalOpen2} onClose={handleCloseModal2}>
          <Box>
            <UploadMaterialForm close={handleCloseModal2} />
          </Box>
        </Modal>
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
            <Overview title="About This Course" about={currentCourse?.about} />
          </Grid>
        )}
        {courseActiveTab.tab2 === "1" &&
          currentCourse?.documents.unit1.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab3 === "1" &&
          currentCourse?.documents.unit2.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab4 === "1" &&
          currentCourse?.documents.unit3.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab5 === "1" &&
          currentCourse?.documents.unit4.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
              sx={{ bgcolor: "#fff", borderRadius: "15px" }}
            >
              <Document doc={doc} />
            </Grid>
          ))}
        {courseActiveTab.tab6 === "1" &&
          currentCourse?.documents.unit5.map((doc, i) => (
            <Grid
              key={i}
              mt={3}
              container
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
