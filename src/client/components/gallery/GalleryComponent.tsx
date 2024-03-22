import React, {FunctionComponent} from "react";
import {GalleryComponentProps} from "../../../models";
import GallerySlideComponent from "./GallerySlideComponent";

const GalleryComponent: FunctionComponent<GalleryComponentProps> = ({ slides,}) => {
  return (
    <>
      {slides.map((slide, index) => <GallerySlideComponent key={`slide-${index}`} {...slide}/>)}
    </>
  );
};

export default GalleryComponent;
