import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const CssTextField = styled(TextField)({
  //   ".MuiInputLabel-root": {
  //     color: "red",
  //   },
  "& label.Mui-focused": {
    color: "#3ABCFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3ABCFF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3ABCFF",
    },
    "&:hover fieldset": {
      borderColor: "#3ABCFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3ABCFF",
    },
  },
});

const Filter = () => {
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(from);

  return (
    <Card raised>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          FILTER
        </Typography>
        <Divider />
        <CssTextField
          label="Writer"
          size="small"
          sx={{ mt: 2 }}
          fullWidth
          InputProps={{
            endAdornment: (
              <LibraryBooksIcon
                sx={{ fontSize: "1.3rem", color: "#3ABCFF", ml: 1 }}
              />
            ),
          }}
        />
        <Divider sx={{ mt: 4, mb: 4 }} />
        <DesktopDatePicker
          label="Start Date"
          value={from}
          minDate={new Date("2017-01-01")}
          onChange={(newValue) => {
            setFrom(newValue);
          }}
          renderInput={(params) => (
            <CssTextField size="small" fullWidth {...params} />
          )}
        />
        <Divider sx={{ mt: 1, mb: 1 }}>To</Divider>
        <DesktopDatePicker
          label="End Date"
          value={to}
          minDate={from}
          onChange={(newValue) => {
            setTo(newValue);
          }}
          renderInput={(params) => (
            <CssTextField size="small" fullWidth {...params} />
          )}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "right" }}>
        <Button
          sx={{
            mr: 1,
            mb: 1,
            mt: 2,
            bgcolor: "#3ABCFF",
            "&: hover": {
              bgcolor: "#0080FF",
            },
          }}
          variant="contained"
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default Filter;
