import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";
import { addNewCourse } from "../../redux/course/course.actions";

import ImageSelect from "../UI/ImageSelect";
import jsImg from "../../assets/js.svg";
import cppImg from "../../assets/cpp.svg";
import javaImg from "../../assets/java.svg";
import pythonImg from "../../assets/python.svg";
import reactImg from "../../assets/react.svg";
import visualImg from "../../assets/visual.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "white",
  //   border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export const AddNewCourseForm = ({ close }) => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    courseName: "",
    image: "",
  });

  const handleCourseNameChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        courseName: value,
      };
    });
  };
  const handleImageChange = (value) => {
    setInput((prevValue) => {
      return {
        ...prevValue,
        image: value,
      };
    });
  };

  const handleSave = () => {
    dispatch(addNewCourse(input));

    close();
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add New Course :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Course Name"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
        onChange={handleCourseNameChange}
        value={input.courseName}
      />
      <br />
      <ImageSelect
        imageList={[cppImg, javaImg, jsImg, pythonImg, reactImg, visualImg]}
        width={600}
        getImage={handleImageChange}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleSave}>
        add
      </Button>
    </Box>
  );
};
