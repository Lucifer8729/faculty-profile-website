import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const ResumeBuildPage = () => {
    const location = window.location.pathname;
    return (
        <Box
      sx={{
        bgcolor: "#EEEEEE",
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    <Paper sx={{mt: 5, width: "60%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        {location}
    </Paper>
    </Box>
    )
}

export default ResumeBuildPage
