import React from "react";

import { Box, Button, Grid, Typography, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import PatentFilter from "../../components/PatentFilter/PatentFilter";
import PatentCard from "../../components/PatentCard/PatentCard";
import { PatentForms } from "../../components/Forms/PatentForms";

// import samplePublications from "./SAMPLE_DATA";

import * as utils from "../../components/UI/utils";

import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const PatentPage = () => {
  const patentList = useSelector((state) => state.patentReducer.PatentList);
  const [filteredList, setFilteredList] = React.useState(patentList);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    utils.addActiveClassInLinks("Patent");
    return () => utils.removeActiveClassInLinks("Patent");
  }, []);

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
          <PatentFilter
            patentList={patentList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        </Grid>
        <Grid item xs={12} md={7} sx={{ position: "relative" }}>
          <Typography
            variant="subtitle1"
            pl={2}
            mt={-5}
            mb={1}
            sx={{ fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet {`(${filteredList.length})`}
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
              <PatentForms close={handleClose} />
            </Box>
          </Modal>
          <Box sx={{ height: "73vh", overflowY: "auto", pr: 2, pl: 2, pb: 2 }}>
            <Grid container spacing={2}>
              {filteredList.map((publication, i) => (
                <Grid item sm={12} md={6} key={i}>
                  <PatentCard id={i} {...publication} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default PatentPage;
