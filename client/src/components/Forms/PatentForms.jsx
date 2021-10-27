import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";
import { addNewPatent } from "../../redux/patent/patent.actions";

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

export const PatentForms = ({ close }) => {
  const dispatch = useDispatch();
  const [from, setFrom] = React.useState(new Date());
  const [input, setInput] = React.useState({
    title: "",
    location: "",
    viewLink: "",
    downloadLink: "",
  });

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        title: value,
      };
    });
  };
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        location: value,
      };
    });
  };
  const handleViewLinkChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        viewLink: value,
      };
    });
  };
  const handleDownloadLinkChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        downloadLink: value,
      };
    });
  };

  const handleSave = () => {
    dispatch(addNewPatent(input, from));

    close();
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add New Publication :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Title"
        multiline
        rows={2}
        sx={{ width: 600, mb: 2 }}
        onChange={handleTitleChange}
        value={input.title}
      />
      <br />
      <DesktopDatePicker
        label="Date"
        value={from}
        minDate={new Date("1980-01-01")}
        onChange={(newValue) => {
          setFrom(newValue);
        }}
        renderInput={(params) => (
          <TextField
            size="small"
            sx={{ width: 290, mr: 2, mb: 2 }}
            fullWidth
            {...params}
          />
        )}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Location"
        multiline
        rows={1}
        size="small"
        sx={{ width: 600, mb: 2 }}
        onChange={handleLocationChange}
        value={input.location}
      />

      <br />
      <TextField
        label="Link to view online"
        size="small"
        sx={{ width: 600, mb: 1 }}
        variant="filled"
        onChange={handleViewLinkChange}
        value={input.viewLink}
      />
      <br />
      <TextField
        label="Link to download"
        size="small"
        sx={{ width: 600, mb: 3 }}
        variant="filled"
        onChange={handleDownloadLinkChange}
        value={input.downloadLink}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleSave}>
        add
      </Button>
    </Box>
  );
};
