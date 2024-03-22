import React, {FunctionComponent, PropsWithChildren} from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const PageContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: '1.75rem' }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {children}
      </Grid>
    </Container>
  );
};

export default PageContainer;
