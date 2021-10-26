import { Avatar, Button, Container, Paper, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";

import React from "react";

const LoginPage = () => {
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(result, token);

    // try {
    //   dispatch({ type: "AUTH", data: { result, token } });
    //   history.push("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later");
  };
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
          <GoogleLogin
            clientId="1057224080475-046ul233k1cf2pcrjaoigovadmi5n26p.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                sx={{ margin: "1% 1% 0", bgcolor: "#0080ff" }}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
