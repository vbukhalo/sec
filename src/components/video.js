import * as React from "react";
import LandscapeVideo from "../images/landscape.mp4";

const Video = () => {
  return (
    <div class="relative flex items-center justify-center h-60 overflow-hidden rounded-2xl">
        <div class="relative z-20 text-3xl text-center">
            WELCOME TO SLAVIC EVANGELICAL CHURCH
        </div>
      <video autoPlay muted loop class="z-10 absolute">
        <source src={LandscapeVideo} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
