import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

const PatentCard = (props) => {
  const { title, date, location, viewLink } = props;
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
          {date}
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
      </CardActions>
    </Card>
  );
};

export default PatentCard;
