import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import { deletePatent } from "../../redux/patent/patent.actions";

const PatentCard = (props) => {
  const { title, month, year, location, viewLink, id } = props;
  const patentList = useSelector((state) => state.patentReducer.PatentList);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePatent(id, patentList));
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Card raised sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1.5 }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            verticalAlign: "middle",
            display: "inline-flex",
            color: "#3ABCFF",
            fontWeight: "600",
          }}
        >
          <DateRangeIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
          {`${monthNames[month]} ${year}`}
        </Typography>
        <br />
        <Typography
          variant="subtitle2"
          sx={{
            verticalAlign: "middle",
            display: "inline-flex",
            mb: 1.5,
            color: "#3ABCFF",
            fontWeight: "600",
          }}
        >
          <LocationOnIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
          {location}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "right" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Link
              href={viewLink}
              underline="none"
              sx={{
                mr: 2,
                verticalAlign: "middle",
                display: "inline-flex",
                color: "#3ABCFF",
                "&: hover": {
                  color: "#0080FF",
                },
              }}
            >
              VIEW ONLINE
              <ArrowRightAltSharpIcon />
            </Link>
            <Button
              sx={{
                bgcolor: "#3ABCFF",
                "&: hover": {
                  bgcolor: "#0080FF",
                },
              }}
              variant="contained"
              endIcon={<DownloadIcon />}
            >
              download
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PatentCard;
