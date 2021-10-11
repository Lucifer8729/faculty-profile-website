import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Filter from "../../components/Filter/Filter";
import PublicationCard from "../../components/PublicationCard/PublicationCard";

import samplePublications from "./SAMPLE_DATA";

import * as utils from "../../components/UI/utils";

const PublicationPage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Publication");
    return () => utils.removeActiveClassInLinks("Publication");
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
          <Filter />
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
          <Box sx={{ height: "75vh", overflowY: "auto", pr: 2, pl: 2 }}>
            {samplePublications.map((publication, i) => (
              <PublicationCard key={i} {...publication} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PublicationPage;
