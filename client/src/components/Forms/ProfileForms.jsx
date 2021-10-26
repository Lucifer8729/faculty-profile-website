import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

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
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Any Quote"
        multiline
        rows={1}
        sx={{ width: 600, mb: 2 }}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Detail"
        multiline
        rows={4}
        sx={{ width: 600, mb: 3 }}
      />
      <br />
      <Button variant="contained" onClick={close}>
        save
      </Button>
    </Box>
  );
};
