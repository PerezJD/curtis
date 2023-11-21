import {Component, createMemo, Match, Switch} from "solid-js";
import {Grid} from "@suid/material";
import {
  GalleryComponentProps,
  ImageComponentProps,
  TextComponentProps,
  PageComponentProps,
  ProjectCardComponentProps,
  VideoComponentProps
} from "../models";
import TextComponent from "../markdown/TextComponent";
import ImageComponent from "../image/ImageComponent";
import VideoComponent from "../video/VideoComponent";
import ProjectCardComponent from "../card/ProjectCardComponent";
import GalleryComponent from "../gallery/GalleryComponent";

const PageComponent: Component<PageComponentProps> = ({ component, width, sx, ...props }) => {

  const columns = createMemo(() => {
    if (width === 'half') {
      return { xs: 12, sm: 6, md: 6 };
    }

    if (width === 'third') {
      return { xs: 12, sm: 4, md: 4 };
    }

    if (width === 'quarter') {
      return { xs: 6, sm: 3, md: 3 };
    }

    return { xs: 12 };
  });

  return (
    <Grid item {...columns} sx={{...sx}}>
      <Switch fallback={<div>Not Found</div>}>
        <Match when={component === 'markdown'}>
          <TextComponent {...props as TextComponentProps} />
        </Match>
        <Match when={component === 'image'}>
          <ImageComponent {...props as ImageComponentProps} />
        </Match>
        <Match when={component === 'video'}>
          <VideoComponent {...props as VideoComponentProps} />
        </Match>
        <Match when={component === 'projectCard'}>
          <ProjectCardComponent {...props as ProjectCardComponentProps} />
        </Match>
        <Match when={component === 'gallery'}>
          <GalleryComponent {...props as GalleryComponentProps} />
        </Match>
      </Switch>
    </Grid>
  );
}

export default PageComponent;
