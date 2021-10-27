import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch, useSelector } from "react-redux";
import { editAboutMe } from "../../redux/profile/profile.actions";

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

export const AboutForms = ({ close }) => {
  const dispatch = useDispatch();
  const aboutMe = useSelector((state) => state.profileReducer.AboutMe);
  const [input, setInput] = React.useState({
    header: aboutMe.header,
    quote: aboutMe.quote,
    detail: aboutMe.detail,
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
    dispatch(editAboutMe(input));

    close();
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        My Story :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Header"
        multiline
        rows={2}
        sx={{ width: 600, mb: 2 }}
        onChange={handleHeaderChange}
        value={input.header}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Any Quote"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
        onChange={handleQuoteChange}
        value={input.quote}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Detail"
        multiline
        rows={4}
        sx={{ width: 600, mb: 3 }}
        onChange={handleDetailChange}
        value={input.detail}
      />
      <br />
      <Button variant="contained" onClick={handleSave}>
        save
      </Button>
    </Box>
  );
};

export const EducationForms = ({ close }) => {
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(from);

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        My Degree :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Degree"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
      />
      <br />
      <DesktopDatePicker
        label="Start Date"
        value={from}
        minDate={new Date("2017-01-01")}
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
      <DesktopDatePicker
        label="End Date"
        value={to}
        minDate={from}
        onChange={(newValue) => {
          setTo(newValue);
        }}
        renderInput={(params) => (
          <TextField
            size="small"
            sx={{ width: 290, mb: 2 }}
            fullWidth
            {...params}
          />
        )}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Institute"
        multiline
        rows={2}
        sx={{ width: 600, mb: 3 }}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={close}>
        add
      </Button>
    </Box>
  );
};

export const SkillForms = ({ close }) => {
  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        New Skill :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Skill Name"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
      />
      <br />
      <TextField
        id="outlined-number"
        label="Rate it on 0-100"
        type="number"
        sx={{ width: 600, mb: 3 }}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={close}>
        add
      </Button>
    </Box>
  );
};
