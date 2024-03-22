import React, {FunctionComponent} from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer: FunctionComponent = () => {

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
