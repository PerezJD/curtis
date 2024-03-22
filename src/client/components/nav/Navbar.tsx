import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState
} from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

const Navbar: FunctionComponent = () => {
  const appBarRef = useRef<HTMLElement|null>(null);
  const [appBarInitialY, setAppBarInitialY] = useState(0);
  const [appBarPositionStyle, setApBarPositionStyle] = useState<'relative'|'fixed'>('relative');

  const handleScroll = () => {
    if (window.scrollY >= appBarInitialY) {
      setApBarPositionStyle('fixed');
    } else {
      setApBarPositionStyle('relative');
    }
  };

  useEffect(() => {
    if (appBarRef.current === null) return;

    // Get y position of element relative to viewport
    const boundingClientRect = appBarRef.current!.getBoundingClientRect();
    setAppBarInitialY(boundingClientRect.y);
  }, [appBarRef.current]);

  return (
    <>
      { /* @ts-ignore */ }
      <AppBar ref={appBarRef}
        position={appBarPositionStyle}
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
