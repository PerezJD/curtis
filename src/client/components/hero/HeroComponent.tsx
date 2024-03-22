import React, {FunctionComponent} from "react";
import {HeroComponentProps} from "../../../models";
import PageComponent from "../page/PageComponent";

import Grid from "@mui/material/Grid";

const HeroComponent: FunctionComponent<HeroComponentProps> = (props) => {

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ background: 'black' }}>
      <PageComponent {...props} sx={{ maxWidth: '768px' }} width="half"/>
    </Grid>
  );
}

export default HeroComponent;
