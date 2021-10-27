import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import DeleteIcon from "@mui/icons-material/Delete";

const showAuthors = (authorsList) => {
  let list = "";
  const n = authorsList.length;
  if (n > 3) {
    authorsList.forEach((author, i) => {
      if (i < n - 2) {
        list += `${author}, `;
      }
    });

    list += `${authorsList[n - 2]} and  ${authorsList[n - 1]}`;
  } else if (n === 2) {
    list = `${authorsList[n - 2]} and  ${authorsList[n - 1]}`;
  } else if (n === 1) {
    list = authorsList[0];
  }

  return list;
};

const PublicationCard = (props) => {
  const { title, date, location, description, authors, viewLink, id } = props;

  const handleDelete = () => {
    console.log(id);
  };

  return (
    <Card raised sx={{ p: 2, mb: 3 }}>
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
        <Typography variant="body1" sx={{ color: "#747474", mb: 2 }}>
          {description}
        </Typography>
        <Typography sx={{ color: "#0080FF", fontWeight: "600" }}>
          {showAuthors(authors)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "left" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Button
              sx={{
                color: "#747474",
                borderColor: "#747474",
                "&: hover": {
                  borderColor: "#747474",
                },
              }}
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              delete
            </Button>
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

export default PublicationCard;
