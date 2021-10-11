import React from "react";
import { NavLink } from "react-router-dom";

// import { Button, ButtonGroup, Link } from "@mui/material";

import "./styles.css";

const links = [
  { to: "/", name: "home" },
  { to: "/profilepage", name: "profile" },
  { to: "/coursepage", name: "course" },
  { to: "/publicationpage", name: "publication" },
  { to: "/patentpage", name: "patent" },
  { to: "/experiencepage", name: "experience" },
  { to: "/contactpage", name: "contact" },
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">LOGO</div>
      {links.map((link) => (
        <div className="link-div">
          <NavLink
            exact
            to={link.to}
            activeClassName="selected-link"
            className="header-links"
          >
            {link.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Header;
