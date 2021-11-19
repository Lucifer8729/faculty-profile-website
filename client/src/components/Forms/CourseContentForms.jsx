import React from "react";

import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
// import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";

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

// const Input = styled("input")({
//   display: "none",
// });

export const EditOverviewForm = ({ close }) => {
  const [input, setInput] = React.useState({
    courseName: "",
  });

  const handleOverviewChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        courseName: value,
      };
    });
  };

  const handleSave = () => {
    close();
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        About This Course :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Overview"
        multiline
        rows={4}
        sx={{ width: 600, mb: 2 }}
        onChange={handleOverviewChange}
        value={input.courseName}
      />
      <br />
      <Button variant="contained" startIcon={<EditIcon />} onClick={handleSave}>
        save
      </Button>
    </Box>
  );
};

export const UploadMaterialForm = ({ close }) => {
  const [input, setInput] = React.useState({
    courseName: "",
  });
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOverviewChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        courseName: value,
      };
    });
  };

  const handleSave = () => {
    close();
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upload Material :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Material title"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
        onChange={handleOverviewChange}
        value={input.courseName}
      />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          size="small"
          sx={{ width: "30%" }}
          label="Select Unit"
          onChange={handleChange}
        >
          <MenuItem value={10}>Unit 1</MenuItem>
          <MenuItem value={20}>Unit 2</MenuItem>
          <MenuItem value={30}>Unit 3</MenuItem>
          <MenuItem value={40}>Unit 4</MenuItem>
          <MenuItem value={50}>Unit 5</MenuItem>
        </Select>
        {/* <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label> */}
        <br />
      </FormControl>
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleSave}>
        add
      </Button>
    </Box>
  );
};
