import {
  Avatar,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";

import React from "react";

import "./styles.css";

const LoginPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#EEEEEE",
        height: "100vh",
        width: "100%",
        position: "absolute",
        zIndex: "-1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
          elevation={3}
        >
          <Avatar sx={{ margin: "1%", bgcolor: "#0080ff" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ margin: "3% 0" }} variant="h5">
            Sign In As Admin
          </Typography>
          <form>
            <div className="login-form-content">
              <TextField
                sx={{ width: "100%", paddingBottom: "4%" }}
                required
                id="outlined-required"
                label="Username"
              />
              <TextField
                sx={{ width: "100%", paddingBottom: "4%" }}
                required
                id="outlined-required"
                label="Password"
              />
              <Button
                sx={{
                  backgroundColor: "#0080ff",
                  color: "#fff",
                  width: "100%",
                }}
                className="login-btn"
              >
                Sign In
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
