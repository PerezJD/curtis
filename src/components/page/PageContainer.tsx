import {Component, ParentProps} from "solid-js";
import {Container, Grid} from "@suid/material";

const PageContainer: Component<ParentProps> = ({ children }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: '1.75rem' }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {children}
      </Grid>
    </Container>
  );
}

export default PageContainer;
