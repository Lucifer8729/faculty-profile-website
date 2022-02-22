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
import { useDispatch } from "react-redux";
import { filterPatent } from "../../redux/patent/patent.actions";

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

// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

const PatentFilter = () => {
  const [from, setFrom] = React.useState(new Date());
  const [to, setTo] = React.useState(from);
  const dispatch = useDispatch();
  // const [filter, setFilter] = React.useState({
  //   fromMonth: from.getMonth(),
  //   fromYear: from.getFullYear(),
  //   toMonth: to.getMonth(),
  //   toYear: to.getFullYear(),
  // });

  // const patentFilter = () => {
  //   let filterList = [];
  //   if (filter.toMonth < filter.fromMonth) {
  //     for (let i = 0; i < patentList.length; i++) {
  //       if (
  //         patentList[i].month >= filter.toMonth &&
  //         patentList[i].month <= filter.fromMonth &&
  //         patentList[i].year >= filter.fromYear &&
  //         patentList[i].year <= filter.toYear
  //       ) {
  //         filterList.push(patentList[i]);
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < patentList.length; i++) {
  //       if (
  //         patentList[i].month <= filter.toMonth &&
  //         patentList[i].month >= filter.fromMonth &&
  //         patentList[i].year >= filter.fromYear &&
  //         patentList[i].year <= filter.toYear
  //       ) {
  //         filterList.push(patentList[i]);
  //       }
  //     }
  //   }
  //   return filterList;
  // };

  // const handleFilterChange = () => {
  //   setFilter(() => {
  //     return {
  //       fromMonth: from.getMonth(),
  //       fromYear: from.getFullYear(),
  //       toMonth: to.getMonth(),
  //       toYear: to.getFullYear(),
  //     };
  //   });
  //   setFilteredList(() => {
  //     filteredList = patentFilter();
  //     console.log(filteredList, filter);
  //     return filteredList;
  //   });
  // };

  //React.useEffect(() => {}, [filter, setFilteredList]);

  const handleFilterClick = () => {
    dispatch(filterPatent(from, to));
  };

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
        <Divider sx={{ mt: 2, mb: 4 }} />
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
          onClick={handleFilterClick}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default PatentFilter;
