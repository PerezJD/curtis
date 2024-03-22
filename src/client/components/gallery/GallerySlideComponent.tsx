import React, {FunctionComponent} from "react";
import ImageComponent from "../image/ImageComponent";
import {GallerySlideComponentProps} from "../../../models";

const GallerySlideComponent: FunctionComponent<GallerySlideComponentProps> = (props) => {
  return <ImageComponent {...props}/>;
};

export default GallerySlideComponent;
