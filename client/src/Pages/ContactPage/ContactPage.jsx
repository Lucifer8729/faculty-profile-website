import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Map from "../../components/Map/Map";

import * as utils from "../../components/UI/utils";

const ContactPage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Contact");
    return () => utils.removeActiveClassInLinks("Contact");
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
      <Box
        sx={{
          bgcolor: "#ffffff",
          width: "70%",
          margin: "auto",
          borderRadius: "10px",
          boxShadow: " 0 8px 16px rgba(0,0,0,0.07)",
        }}
      >
        <Grid mt={15} container direction="row">
          <Grid item xs={6} md={5}>
            <Box ml={5} mt={5}>
              <Typography variant="h4">Contact Me:</Typography>
              <Typography
                variant="subtitle1"
                mt={4}
                sx={{ fontWeight: "bold" }}
              >
                My Address:
              </Typography>
              <Typography variant="body1" ml={5} color="#747474">
                198 West 21th Street, Suite 721 New York NY 10016
              </Typography>
              <Typography
                variant="subtitle1"
                mt={2}
                sx={{ fontWeight: "bold" }}
              >
                My Email:
              </Typography>
              <Typography variant="body1" ml={5} color="#747474">
                test@gmail.com
              </Typography>
              <Typography
                variant="subtitle1"
                mt={2}
                sx={{ fontWeight: "bold" }}
              >
                My Phone:
              </Typography>
              <Typography variant="body1" ml={5} color="#747474">
                +91 984 017 4569
              </Typography>
              <Grid container mt={10} direction="column" spacing={1.5} mb={4}>
                <Grid item>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#3ABCFF",
                      "&: hover": {
                        color: "#0080FF",
                      },
                    }}
                  >
                    +FACEBOOK
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#3ABCFF",
                      "&: hover": {
                        color: "#0080FF",
                      },
                    }}
                  >
                    +TWITTER
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#3ABCFF",
                      "&: hover": {
                        color: "#0080FF",
                      },
                    }}
                  >
                    +LINKEDIN
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={8} md={7}>
            <Box
              sx={{
                margin: "1% 1% 1% 4%",
                borderRadius: "10px",
                border: "1px solid #0080FF",
                height: "97%",
                position: "relative",
              }}
            >
              <Map />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
