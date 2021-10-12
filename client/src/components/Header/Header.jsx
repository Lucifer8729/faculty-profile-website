import React from "react";
import { NavLink } from "react-router-dom";

import { Grid, Box } from "@mui/material";

import "./styles.css";

const links = [
  { to: "/home", name: "Home" },
  { to: "/profilepage", name: "Profile" },
  { to: "/coursepage", name: "Course" },
  { to: "/publicationpage", name: "Publication" },
  { to: "/patentpage", name: "Patent" },
  { to: "/experiencepage", name: "Experience" },
  { to: "/contactpage", name: "Contact" },
];

const Header = () => {
  return (
    <div className="header">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ pr: 5, pl: 5, height: "100%" }}
      >
        <Grid item xs={1}>
          <NavLink exact to="/home">
            <div className="header-logo">LOGO</div>
          </NavLink>
        </Grid>
        <Grid item xs={10}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ height: "80px" }}
          >
            {links.map((link, i) => (
              <Grid item key={i} xs={1} sx={{ width: "100%" }}>
                <NavLink to={link.to} activeClassName={`selected-link`}>
                  <Box
                    sx={{
                      // pr: 2,
                      // pl: 2,
                      bgcolor: "inherit",
                      height: "80px",
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {link.name}
                  </Box>
                  <div className={`arrow-div ${link.name}-link`}>
                    {/* <div className="arrow-down-links"></div> */}
                  </div>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
