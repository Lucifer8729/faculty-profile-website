import React from "react";

import { Box, Grid, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

import Filter from "../../components/Filter/Filter";
import PublicationCard from "../../components/PublicationCard/PublicationCard";
import { PublicationForms } from "../../components/Forms/PublicationForms";

// import samplePublications from "./SAMPLE_DATA";

import * as utils from "../../components/UI/utils";

import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { fetchPublications } from "../../redux/publication/publications.actions";

const PublicationPage = () => {
  const publicationsList = useSelector(
    (state) => state.publicationReducer.PublicationList
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    utils.addActiveClassInLinks("Publication");
    return () => utils.removeActiveClassInLinks("Publication");
  }, []);

  React.useEffect(() => {
    dispatch(fetchPublications());
  }, [dispatch]);

  return (
    <>
      <Header />
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
          <Grid item xs={12} md={7} sx={{ position: "relative" }}>
            <Typography
              variant="subtitle1"
              pl={2}
              mt={-5}
              mb={1}
              sx={{ fontWeight: "bold" }}
            >
              Lorem ipsum dolor sit amet {`(${publicationsList.length})`}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ position: "absolute", mt: -5, mr: 4, right: 0 }}
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              ADD
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <PublicationForms close={handleClose} />
              </Box>
            </Modal>
            <Box sx={{ height: "75vh", overflowY: "auto", pr: 2, pl: 2 }}>
              {publicationsList.map((publication, i) => (
                <PublicationCard key={i} id={i} {...publication} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PublicationPage;
