import React, {FunctionComponent} from "react";
import {HeroComponentProps} from "../../../models";
import PageComponent from "../page/PageComponent";

import Container from "@mui/material/Container";

const HeroComponent: FunctionComponent<HeroComponentProps> = (props) => {

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black'
    }}>
      <PageComponent {...props}  sx={{ width: '100%', maxWidth: '768px', height:'auto' }} />
    </Container>
  );
}

export default HeroComponent;
