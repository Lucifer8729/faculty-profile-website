import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import ProfileButton from "../../components/UI/Button";

import * as utils from "../../components/UI/utils";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ExperiencePage = () => {
  const [expActiveTab, setExpActiveTab] = useState({
    tab1: "1",
    tab2: "",
    tab3: "",
  });

  React.useEffect(() => {
    utils.addActiveClassInLinks("Experience");
    return () => utils.removeActiveClassInLinks("Experience");
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
      <Grid
        container
        mt={10}
        justify="center"
        alignItems="center"
        spacing={5}
        sx={{
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid item>
          <ProfileButton
            onClick={() => {
              setExpActiveTab({ tab1: "1", tab2: "", tab3: "" });
            }}
            value={expActiveTab.tab1}
            className="button-click"
          >
            Teaching
          </ProfileButton>
        </Grid>
        <Grid item>
          <ProfileButton
            onClick={() => {
              setExpActiveTab({ tab1: "", tab2: "1", tab3: "" });
            }}
            value={expActiveTab.tab2}
            className="button-click"
          >
            Workshops
          </ProfileButton>
        </Grid>
        <Grid item>
          <ProfileButton
            onClick={() => {
              setExpActiveTab({ tab1: "", tab2: "", tab3: "1" });
            }}
            value={expActiveTab.tab3}
            className="button-click"
          >
            Awards
          </ProfileButton>
        </Grid>
      </Grid>
      {expActiveTab.tab1 === "1" && (
        <DataGrid
          style={{
            marginTop: "2%",
            width: "70%",
            height: "60vh",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#0080ff",
            color: "#ffffff",
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      )}
    </Box>
  );
};

export default ExperiencePage;
