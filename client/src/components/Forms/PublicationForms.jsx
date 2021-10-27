import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AddIcon from "@mui/icons-material/Add";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   editAboutMe,
// } from "../../redux/profile/profile.actions";

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

export const PublicationForms = ({ close }) => {
  //   const dispatch = useDispatch();
  const [from, setFrom] = React.useState(new Date());
  const [input, setInput] = React.useState({
    header: "",
    quote: "",
    detail: "",
  });

  const handleHeaderChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        header: value,
      };
    });
  };
  const handleQuoteChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        quote: value,
      };
    });
  };
  const handleDetailChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        detail: value,
      };
    });
  };

  const handleSave = () => {
    // dispatch(editAboutMe(input));

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
        onChange={handleHeaderChange}
        value={input.header}
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
        onChange={handleQuoteChange}
        value={input.quote}
      />

      <br />
      <TextField
        id="outlined-multiline-static"
        label="Detail"
        multiline
        rows={3}
        sx={{ width: 600, mb: 2 }}
        onChange={handleDetailChange}
        value={input.detail}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Authors"
        placeholder="For multiple authors: name1, name2, name3..."
        multiline
        rows={1}
        size="small"
        sx={{ width: 600, mb: 3 }}
        onChange={handleQuoteChange}
        value={input.quote}
      />
      <br />
      <TextField
        label="Link to view online"
        size="small"
        sx={{ width: 600, mb: 1 }}
        variant="filled"
      />
      <br />
      <TextField
        label="Link to download"
        size="small"
        sx={{ width: 600, mb: 3 }}
        variant="filled"
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleSave}>
        add
      </Button>
    </Box>
  );
};
