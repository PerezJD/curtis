import React, {FunctionComponent} from "react";
import {GalleryComponentProps} from "../../../models";

import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";

const GalleryComponent: FunctionComponent<GalleryComponentProps> = ({ options, images,}) => {
  const {
    variant,
    columns,
    gap
  } = options;
  return (
    <ImageList variant={variant} cols={columns} gap={gap}>
      {images.map(({src, caption, credit}, index) => (
        <ImageListItem key={`gallery-item-${index}`}>
          <a href={src} target="_blank">
            <img
              src={src}
              alt={caption}
              loading="lazy"
              width="100%"
            />
          </a>
          {caption &&
            <ImageListItemBar
              title={caption}
              subtitle={credit}
            />
          }
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryComponent;
