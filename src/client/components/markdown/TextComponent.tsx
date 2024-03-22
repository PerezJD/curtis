import React, {FunctionComponent} from "react";
import {TextComponentProps} from "../../../models";

import {compiler} from "markdown-to-jsx";
import markdownOptions from "./markdownOptions";

const TextComponent: FunctionComponent<TextComponentProps> = ({ content }) => {

  const renderedContent = compiler(content, markdownOptions)

  return <>{renderedContent}</>;
}

export default TextComponent;
