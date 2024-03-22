import React, {FunctionComponent} from "react";
import {TextComponentProps} from "../../../models";

import Typography from "@mui/material/Typography";

const TextComponent: FunctionComponent<TextComponentProps> = ({ content }) => {
  return <Typography variant="body1" component="p" color="textSecondary">{ content }</Typography>;
}

export default TextComponent;
