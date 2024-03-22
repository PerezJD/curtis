import React, {FunctionComponent} from "react";
import {ImageComponentProps} from "../../../models";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ImageComponent: FunctionComponent<ImageComponentProps> = ({ src, caption, credit, sx }) => {
  return (
    <Box component="figure" sx={{ textAlign: 'center', margin: 0, ...sx }}>
      <img src={src} alt={caption} width="100%"/>
      { (caption || credit) && (
        <Box component="figcaption">
          <Typography variant="subtitle1">{caption} - {credit}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImageComponent;
