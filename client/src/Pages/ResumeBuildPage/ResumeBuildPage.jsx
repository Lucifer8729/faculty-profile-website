import { Box } from "@mui/system";
import React from "react";

import classes from "./resumebuildpage.module.css";

const ResumeBuildPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#EEEEEE",
        //height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div class={classes["main-page"]}>
        <div class={classes["sub-page"]}>
          <h3 align="center">A4 Page in Portrait.(210mm X 297mm)</h3>
        </div>
      </div>
      {/* <div class={classes["main-page"]}>
        <div class={classes["sub-page"]}>
          <h3 align="center">A4 Page in Portrait.(210mm X 297mm)</h3>
        </div>
      </div> */}
    </Box>
  );
};

export default ResumeBuildPage;
