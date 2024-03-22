import React, {FunctionComponent} from "react";
import {MultilineMarkdownComponentProps} from "../../../models";

import {compiler} from "markdown-to-jsx";
import markdownOptions from "./markdownOptions";

const MultilineMarkdownComponent: FunctionComponent<MultilineMarkdownComponentProps> = ({ lines }) => {

  const renderedContent = lines.reduce((acc, line) => {
    const renderedLine = compiler(line, markdownOptions);
    console.log(renderedLine);
    return `${acc}${renderedLine}\n\n`
  }, '');

  console.log(renderedContent);

  return (
    <>
      { lines.map((line) => compiler(`${line}\n\n`, markdownOptions)) }
    </>);
}

export default MultilineMarkdownComponent;
