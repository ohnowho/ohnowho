"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

const PhotoWall = ({data}:{data: any[]}) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.photowall}>
      {data.map((row, rowi) => (
        <Parallax
          animation={row.animation}
          className={styles.wrap}
          key={rowi}>
          <ul id={`row-${rowi}`} key={rowi}>
            {row.imgs.map((item, itemi) => (
              <li key={itemi}>
                <img src={item}></img>
              </li>
            ))}
          </ul>
        </Parallax>
      ))}
    </div>
  );
};

export default PhotoWall;
