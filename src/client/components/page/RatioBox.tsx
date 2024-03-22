import React, {FunctionComponent} from "react";

import Box, {BoxProps} from "@mui/material/Box";

type Ratio = [number, number];

interface RatioBoxProps extends BoxProps {
  ratio?: Ratio;
}

const RatioBox: FunctionComponent<RatioBoxProps> = ({ ratio = [16,9], sx, ...rest }) =>  {

  const padding = () => {
    const [w, h] = ratio;
    return `${(h / w) * 100}%`;
  };

  return (
    <Box
      className="cr-ratio-wrapper"
      sx={{
        position: 'relative',
        paddingBottom: `${padding()}`,
        ...sx
      }}
      {...rest}
    />
  );
};

export default RatioBox;
