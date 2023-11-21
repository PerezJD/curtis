import {Component} from "solid-js";
import {Box, Container} from "@suid/material";

const Footer: Component = () => {

  const copyrightYear = (new Date()).getFullYear();

  return (
    <Container>
      <Box component="footer" sx={{ textAlign: "center", padding: "1.25rem 0" }}>
        &copy; Copyright Curtis Rochelle {copyrightYear}
      </Box>
    </Container>
  );
}

export default Footer;
