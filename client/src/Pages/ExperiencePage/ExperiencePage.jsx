import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import ProfileButton from "../../components/UI/Button";

import * as utils from "../../components/UI/utils";

const teachingColumns = [
  {
    field: "designation",
    headerName: "Designation",
    width: 300,
    headerClassName: "super-app-theme--header",
    sortable: false,
  },
  {
    field: "from",
    headerName: "From",
    width: 200,
    sortable: false,
  },
  {
    field: "to",
    headerName: "To",
    width: 200,
    sortable: false,
  },
  {
    field: "programs",
    headerName: "Programs taught - UG/PG",
    sortable: false,
    width: 300,
  },
];

const teachingRows = [
  {
    id: 1,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
  {
    id: 2,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
  {
    id: 3,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
  {
    id: 4,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
  {
    id: 5,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
  {
    id: 6,
    designation: "Assisstant Professor(S.G)",
    from: "01.07.2017",
    to: "Till Date",
    programs: "UG",
  },
];

const workshopColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "super-app-theme--header",
    sortable: false,
  },
  {
    field: "status",
    headerName: "Status as Organizer",
    width: 170,
    sortable: false,
  },
  {
    field: "title",
    headerName: "Title of the Conference/Seminar",
    width: 600,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    sortable: false,
  },
];

const workshopRows = [
  {
    id: 1,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
  {
    id: 2,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
  {
    id: 3,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
  {
    id: 4,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
  {
    id: 5,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
  {
    id: 6,
    status: "Co-ordinator",
    title: "2 days Webinar on Serverless Technology with Hands-On Session",
    date: "06/07/2020 - 07/07/2020",
  },
];

const awardColumns = [
  {
    field: "name",
    headerName: "Name of Programme/ Award",
    width: 220,
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    sortable: false,
  },
  {
    field: "institute",
    headerName: "Name of Institute",
    width: 170,
    sortable: false,
  },
  {
    field: "period",
    headerName: "Period/ Year of Award",
    width: 200,
    sortable: false,
  },
  {
    field: "description",
    headerName: "Responsibility/ Cash Prize/ Medal/ Certificate",
    width: 400,
    sortable: false,
  },
];

const awardRows = [
  {
    id: 1,
    name: "Research Day",
    institute: "SRM University",
    period: "28/02/2017",
    description: "IOT based smart car parking",
  },
  {
    id: 2,
    name: "Research Day",
    institute: "SRM University",
    period: "28/02/2017",
    description: "IOT based smart car parking",
  },
  {
    id: 3,
    name: "Research Day",
    institute: "SRM University",
    period: "28/02/2017",
    description: "IOT based smart car parking",
  },
  {
    id: 4,
    name: "Research Day",
    institute: "SRM University",
    period: "28/02/2017",
    description: "IOT based smart car parking",
  },
  {
    id: 5,
    name: "100% Result",
    institute: "SRM University",
    period: "2006-2007",
    description: "Certificate",
  },
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
          width: "75%",
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
          disableColumnMenu
          style={{
            marginTop: "2%",
            width: "70%",
            height: "60vh",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#0080ff",
            color: "#ffffff",
          }}
          rows={teachingRows}
          columns={teachingColumns}
          pageSize={10}
        />
      )}
      {expActiveTab.tab2 === "1" && (
        <DataGrid
          disableColumnMenu
          style={{
            marginTop: "2%",
            width: "70%",
            height: "60vh",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#0080ff",
            color: "#ffffff",
          }}
          rows={workshopRows}
          columns={workshopColumns}
          pageSize={10}
        />
      )}
      {expActiveTab.tab3 === "1" && (
        <DataGrid
          disableColumnMenu
          style={{
            marginTop: "2%",
            width: "70%",
            height: "60vh",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#0080ff",
            color: "#ffffff",
          }}
          rows={awardRows}
          columns={awardColumns}
          pageSize={10}
        />
      )}
    </Box>
  );
};

export default ExperiencePage;
