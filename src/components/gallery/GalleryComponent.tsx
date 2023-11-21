import {Component} from "solid-js";
import {GalleryComponentProps} from "../models";
import GallerySlideComponent from "./GallerySlideComponent";

const GalleryComponent: Component<GalleryComponentProps> = ({ slides,}) => {
  return (
    <>
      {slides.map((slide) => <GallerySlideComponent {...slide}/>)}
    </>
  );
};

export default GalleryComponent;
