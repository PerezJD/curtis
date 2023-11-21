import {Component} from "solid-js";
import ImageComponent from "../image/ImageComponent";
import {GallerySlideComponentProps} from "../models";

const GallerySlideComponent: Component<GallerySlideComponentProps> = (props) => {
  return <ImageComponent {...props}/>;
};

export default GallerySlideComponent;
