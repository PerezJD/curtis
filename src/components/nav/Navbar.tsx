import {Component, createSignal, onCleanup, onMount} from "solid-js";
import {AppBar, Button, Container, Grid, Toolbar} from "@suid/material";

const Navbar: Component = () => {
  const [appBarInitialY, setAppBarInitialY] = createSignal(0);
  const [appBarPositionStyle, setApBarPositionStyle] = createSignal<'relative'|'fixed'>('relative');
  let appBarRef: HTMLElement;

  const handleScroll = () => {
    if (window.scrollY >= appBarInitialY()) {
      setApBarPositionStyle('fixed');
    } else {
      setApBarPositionStyle('relative');
    }
  };

  onMount(() => {
    // Get y position of element relative to viewport
    const boundingClientRect = appBarRef.getBoundingClientRect();
    setAppBarInitialY(boundingClientRect.y);
  });

  return (
    <>
      { /* @ts-ignore */ }
      <AppBar ref={appBarRef}
        position={appBarPositionStyle()}
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
              <Grid item>
                <Button href="#">Professional Work</Button>
              </Grid>
              <Grid item>
                <Button href="#">Personal Work</Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
