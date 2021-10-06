import React from "react";
import { Button, ButtonGroup, Link } from "@mui/material";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="outlined">
          <Link href="/" underline="none">
            home
          </Link>
        </Button>
        <Button variant="outlined">
          <Link href="/profilepage" underline="none">
            profile
          </Link>
        </Button>
        <Button variant="outlined">
          <Link href="/coursepage" underline="none">
            course
          </Link>
        </Button>
        <Button variant="outlined">
          <Link href="/publicationpage" underline="none">
            publication
          </Link>
        </Button>
        <Button variant="outlined">
          <Link href="/experiencepage" underline="none">
            experience
          </Link>
        </Button>
        <Button variant="outlined">
          <Link href="/contactpage" underline="none">
            contact
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
