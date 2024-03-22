import React, {FunctionComponent} from "react";
import {VideoComponentProps} from "../../../models";
import RatioBox from "../page/RatioBox";

const BASE_YT_EMBED_URL = 'https://www.youtube.com/embed/';

const VideoComponent: FunctionComponent<VideoComponentProps> = ({ src, title, sx}) => {
  const params = new URLSearchParams((src.split('?'))[1]);
  const ytEmbedUrl = `${BASE_YT_EMBED_URL}${params.get('v')}`;

  return (
    <RatioBox sx={{...sx}}>
      <iframe
        width="100%"
        height="auto"
        src={ytEmbedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          border: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </RatioBox>
  );
}

export default VideoComponent;
