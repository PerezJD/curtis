import {Component} from "solid-js";
import {TextComponentProps} from "../models";
import {Typography} from "@suid/material";

const TextComponent: Component<TextComponentProps> = ({ content }) => {
  return <Typography variant="body1" component="p" color="textSecondary">{ content }</Typography>;
}

export default TextComponent;
