import React, {FunctionComponent, useMemo} from "react";

import {
  GalleryComponentProps,
  ImageComponentProps,
  TextComponentProps,
  PageComponentProps,
  ProjectCardComponentProps,
  VideoComponentProps
} from "../../../models";
import TextComponent from "../markdown/TextComponent";
import ImageComponent from "../image/ImageComponent";
import VideoComponent from "../video/VideoComponent";
import ProjectCardComponent from "../card/ProjectCardComponent";
import GalleryComponent from "../gallery/GalleryComponent";

import Grid from "@mui/material/Grid";

const PageComponent: FunctionComponent<PageComponentProps> = ({ component, width, sx, ...props }) => {

  const columns = useMemo(() => {
    if (width === 'half') {
      return { xs: 12, sm: 6, md: 6 };
    }

    if (width === 'third') {
      return { xs: 12, sm: 4, md: 4 };
    }

    if (width === 'quarter') {
      return { xs: 6, sm: 3, md: 3 };
    }

    return { xs: 12, sm: null, md: null };
  }, [width]);

  return (
    <>
      <Grid item columns={columns} sx={{...sx}}>
        {component === 'markdown' && <TextComponent {...props as TextComponentProps} />}
        {component === 'image' && <ImageComponent {...props as ImageComponentProps} />}
        {component === 'video' && <VideoComponent {...props as VideoComponentProps} />}
        {component === 'projectCard' && <ProjectCardComponent {...props as ProjectCardComponentProps} />}
        {component === 'gallery' && <GalleryComponent {...props as GalleryComponentProps} />}
      </Grid>
    </>
  );
};

export default PageComponent;
