import React, {
  FunctionComponent,
  useRef,
} from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import navigation from '../../../../data/navigation.json';

const Navbar: FunctionComponent = () => {
  const appBarRef = useRef<HTMLElement|null>(null);
  // TODO: implement sticky AppBar

  return (
    <>
      { /* @ts-ignore */ }
      <AppBar ref={appBarRef}
        position="relative"
        sx={{
          background: '#121212',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderLeftWidth: '0px',
          borderRightWidth: '1px',
          boxShadow: 'none'
        }}
      >
        <Toolbar variant="dense">
          <Container maxWidth="xs">
            <Grid container spacing={2}>
              {navigation.links.map(({url, text}, index) => (
                <Grid item key={`nav-link-${index}`}>
                  <Button href={url}>{text}</Button>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
