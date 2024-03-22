import React, {FunctionComponent} from "react";
import {MultilineMarkdownComponentProps} from "../../../models";

import {compiler} from "markdown-to-jsx";
import markdownOptions from "./markdownOptions";

const MultilineMarkdownComponent: FunctionComponent<MultilineMarkdownComponentProps> = ({ lines }) => {
  return (
    <>
      { lines.map((line) => compiler(`${line}\n\n`, markdownOptions)) }
    </>);
}

export default MultilineMarkdownComponent;
