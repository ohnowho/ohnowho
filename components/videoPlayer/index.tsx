"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ({options}:any) => {
  const videoRef = useRef(null);
  const playerRef = useRef<any>(null);

  const onReady = (play: any) => {
    videoRef.current = play;
    play.play();
  };
  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {

        onReady && onReady(player);
      }));
    } else {
      // you can update player here [update player through props]
      const player = playerRef.current;

    }
  }, [options, videoRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
      />
    </div>
  );
};
export const VideoPlayer = ({config}:any) => {
  const videoRef = useRef(null);
  const playerRef = useRef<any>(null);
  const options = {
    controls: false,
    playbackRates: [0.7, 1.0, 1.5, 2.0], 
    autoplay: true, 
    muted: true,
    loop: true, 
    preload: "auto", 
    // aspectRatio: "16:9", 
    fluid: true, 
    sources: [
      {
        src: config.src,
        type: config.type,
      },
    ],
    poster: config.poster,
    // width: '300px',
    notSupportedMessage: "Error", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
    // controlBar: {
    //   timeDivider: true,
    //   durationDisplay: true,
    //   remainingTimeDisplay: true,
    //   fullscreenToggle: true, // 全屏按钮
    // },
  };

  return (
    <div className={styles.videoplayer}>
      <VideoJS options={options}></VideoJS>
    </div>
  );
};
