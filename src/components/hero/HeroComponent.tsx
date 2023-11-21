import {Component} from "solid-js";
import {Grid} from "@suid/material";
import {HeroComponentProps} from "../models";
import PageComponent from "../page/PageComponent";

const HeroComponent: Component<HeroComponentProps> = (props) => {

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ background: 'black' }}>
      <PageComponent {...props} sx={{ maxWidth: '768px' }} width="half"/>
    </Grid>
  );
}

export default HeroComponent;
