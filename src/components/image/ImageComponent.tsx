import {Component} from "solid-js";
import Box from "@suid/material/Box";
import Typography from "@suid/material/Typography";
import {ImageComponentProps} from "../models";

const ImageComponent: Component<ImageComponentProps> = ({ src, caption, credit, sx }) => {
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
