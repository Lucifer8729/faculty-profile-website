import React from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

import { EditCourseForm } from "../Forms/CourseForms";

import classes from "./Course.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../../redux/course/course.actions";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#3ABCFF",
    },
  },
});

const Course = (props) => {
  const { id, idx, title, units, materials, img } = props;
  const courses = useSelector((state) => state.courseReducer.CourseList);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [modalOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

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

  const handleDelete = () => {
    dispatch(deleteCourse(idx, courses));

    handleClose();
  };

  return (
    <Card
      raised
      sx={{
        mb: "2",
        borderRadius: "10px",
        backgroundColor: "#0080ff",
        color: "#fff",
        height: 220,
      }}
      className={classes.card}
    >
      <CardContent>
        <IconButton
          id="long-button"
          sx={{ position: "absolute", right: 5, color: "white" }}
          onClick={handleClick}
        >
          <MoreVertIcon />
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
            <ListItemText>edit</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>delete</ListItemText>
          </MenuItem>
        </Menu>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box>
            <EditCourseForm
              close={handleCloseModal}
              idx={idx}
              currTitle={title}
            />
          </Box>
        </Modal>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: "1", width: "90%" }}
        >
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
              position: "absolute",
              bottom: 18,
              "&: hover": { bgcolor: "#ffffff" },
            }}
            // href={`/coursepage/${id}`}
            onClick={() => history.push(`coursepage/${id}`)}
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
