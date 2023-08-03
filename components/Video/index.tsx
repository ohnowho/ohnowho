"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const MyVideo = ({ data }: { data: any }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.video}>
          <img src={data.poster}></img>
          <video
            src={data.src}
            poster={data.poster}
            autoPlay
            loop
            muted
            playsInline={true}
            webkit-playsinline="true"
          ></video>
    </div>
  );
};
