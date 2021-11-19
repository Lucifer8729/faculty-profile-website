import { Grid } from "@mui/material";
import React from "react";

import classes from "./Document.module.css";

const Document = ({ doc }) => {
  return (
    <>
      <Grid item xs={1} sx={{ display: "flex" }}>
        <div className={classes["doc-icon__div"]}>
          <i className="fas fa-file-alt fa-2x"></i>
        </div>
      </Grid>
      <Grid item xs={10} sx={{ display: "flex" }}>
        <div className={classes.content}>
          <h3>{doc.title}</h3>
          <p>{doc.date}</p>
        </div>
      </Grid>

      <Grid item xs={1} sx={{ display: "flex" }}>
        <div className={classes["download-icon"]}>
          <i className="fas fa-download fa-2x"></i>
        </div>
      </Grid>
    </>
  );
};

export default Document;
