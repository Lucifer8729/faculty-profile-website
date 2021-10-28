import React from "react";

import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";

import "./ImageSelect.css";

const ImageSelect = ({ imageList, width }) => {
  const [active, setActive] = React.useState(Array(imageList.length));

  const handleClick = (i) => {
    const newArray = new Array(imageList.length);
    setActive(() => {
      for (let i = 0; i < imageList.length; ++i) {
        newArray[i] = 0;
      }
      newArray[i] = "active";
      console.log(newArray);
      return newArray;
    });
  };
  return (
    <Grid container sx={{ width: width }} spacing={1}>
      {imageList.map((image, i) => (
        <Grid item key={i} xs={3}>
          <Box
            className={`image-select-B image-select-${active[i]}`}
            sx={{
              position: "relative",
              bgcolor: "#0080ff",
              textAlign: "right",
              overflow: "hidden",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(i)}
          >
            <div>
              <div className={`image-select-0T${active[i]}`}></div>
              <CheckIcon
                className={`image-select-0T-M image-select-0T-M${active[i]}`}
                sx={{ fontSize: "smaller" }}
              />
              <img
                src={image}
                alt="course-img"
                className={"image-select-course-img"}
              />
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageSelect;
