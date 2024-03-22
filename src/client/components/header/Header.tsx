import React, {FunctionComponent} from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Navbar from "../nav/Navbar";

const Header: FunctionComponent = () => {
  return (
    <>
      <Box component="header" sx={{ margin: '1rem 0' }}>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{ textTransform: "uppercase" }}>
          Curtis Rochelle
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          style={{
            textTransform: "uppercase",
            fontFamily: '"Lato", "Helvetica", "Arial", sans-serif'
          }}>
          Level Design
        </Typography>
      </Box>
      <Navbar />
    </>
  );
}

export default Header;
