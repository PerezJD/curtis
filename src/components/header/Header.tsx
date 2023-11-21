import {Component, createSignal, onCleanup, onMount} from "solid-js";
import {Box, Slide, Typography} from "@suid/material";
import Navbar from "../nav/Navbar";

const Header: Component = () => {
  return (
    <>
      <Box component="header" sx={{ margin: '1rem 0' }}>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{ "text-transform": "uppercase" }}>
          Curtis Rochelle
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          style={{ "text-transform": "uppercase", "font-family": '"Lato", "Helvetica", "Arial", sans-serif' }}>
          Level Design
        </Typography>
      </Box>
      <Navbar />
    </>
  );
}

export default Header;
