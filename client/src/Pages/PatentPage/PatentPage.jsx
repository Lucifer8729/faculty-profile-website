import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import PatentFilter from "../../components/PatentFilter/PatentFilter";
import PatentCard from "../../components/PatentCard/PatentCard";

import samplePublications from "./SAMPLE_DATA";

import * as utils from "../../components/UI/utils";

const PatentPage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Patent");
    return () => utils.removeActiveClassInLinks("Patent");
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#EEEEEE",
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <Grid container mt={20} direction="row" justifyContent="center">
        <Grid item xs={6} md={2} mr={4} mb={7}>
          <PatentFilter />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            variant="subtitle1"
            pl={2}
            mt={-5}
            mb={1}
            sx={{ fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet
          </Typography>
          <Box sx={{ height: "75vh", overflowY: "auto", pr: 2, pl: 2, pb: 2 }}>
            <Grid container spacing={2}>
              {samplePublications.map((publication, i) => (
                <Grid item sm={12} md={6} key={i}>
                  <PatentCard {...publication} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatentPage;
