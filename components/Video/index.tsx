"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const MyVideo = ({ data }: { data: any }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.video}>
          <video
            src={data.src}
            autoPlay
            loop
            muted
            playsInline={true}
          ></video>
    </div>
  );
};
