import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch, useSelector } from "react-redux";
import {
  editAboutMe,
  addNewDegree,
  addNewSkill,
} from "../../redux/profile/profile.actions";

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
  const dispatch = useDispatch();
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(from);
  const [input, setInput] = React.useState({
    degree: "",
    institute: "",
  });

  const handleDegreeChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        degree: value,
      };
    });
  };
  const handleInstituteChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        institute: value,
      };
    });
  };

  const handleAdd = () => {
    dispatch(addNewDegree(input, from, to));

    close();
  };

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
        onChange={handleDegreeChange}
        value={input.degree}
      />
      <br />
      <DesktopDatePicker
        label="Start Date"
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
        onChange={handleInstituteChange}
        value={input.institute}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
        add
      </Button>
    </Box>
  );
};

export const SkillForms = ({ close }) => {
  const dispatch = useDispatch();
  // const skills = useSelector((state) => state.profileReducer.Skills);
  const [input, setInput] = React.useState({
    skill: "",
    rating: "",
  });

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        skill: value,
      };
    });
  };
  const handleRateChange = (e) => {
    const value = e.target.value;
    setInput((prevValue) => {
      return {
        ...prevValue,
        rating: value,
      };
    });
  };

  const handleSave = () => {
    dispatch(addNewSkill(input));

    close();
  };
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
        onChange={handleSkillChange}
        value={input.skill}
      />
      <br />
      <TextField
        id="outlined-number"
        label="Rate it on 0-100"
        type="number"
        sx={{ width: 600, mb: 3 }}
        onChange={handleRateChange}
        value={input.rating}
      />
      <br />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleSave}>
        add
      </Button>
    </Box>
  );
};
