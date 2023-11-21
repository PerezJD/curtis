import {Theme} from "@suid/material";
import SxProps from "@suid/system/sxProps";

export interface PageData {
  path: string;
  title: string;
  hero?: HeroComponentProps;
  components: PageComponentProps[];
}

export interface PageProps {
  pageData: PageData;
}

export type HeroComponentProps = ImageComponentProps | VideoComponentProps;

export interface PageComponentProps {
  component: string;
  width?: 'full' | 'half' | 'third' | 'quarter';
  sx?: SxProps<Theme>;
}

export type PageComponents = PageComponentProps[];

export interface TextComponentProps extends PageComponentProps {
  component: "markdown";
  content: string;
}

export interface ProjectCardComponentProps extends PageComponentProps {
  component: "projectCard";
  image: ImageComponentProps;
  projectName: string;
  link: string;
}

export interface ImageComponentProps extends PageComponentProps {
  component: "image";
  src: string;
  caption: string;
  credit: string;
}

export interface VideoComponentProps extends PageComponentProps {
  component: "video";
  src: string;
  title: string;
}

export interface GalleryComponentProps extends PageComponentProps {
  component: "gallery";
  slides: GallerySlideComponentProps[];
}

export interface GallerySlideComponentProps extends ImageComponentProps {}
