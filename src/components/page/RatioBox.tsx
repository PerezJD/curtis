import {Component, ParentProps} from "solid-js";
import Box from "@suid/material/Box";
import BoxProps from "@suid/material/Box/BoxProps";

type Ratio = [number, number];

interface RatioBoxProps extends BoxProps {
  ratio?: Ratio;
  component?: string;
}

const RatioBox: Component<RatioBoxProps> = ({ ratio = [16,9], sx, ...props }) =>  {

  const padding = () => {
    const [w, h] = ratio;
    return `${(h / w) * 100}%`;
  };

  return (
    <Box
      class="cr-ratio-wrapper"
      sx={{
        position: 'relative',
        paddingBottom: `${padding()}`,
        ...sx
      }}
      {...props}
    />
  );
};

export {
  RatioBox
};
