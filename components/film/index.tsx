"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

const Film = ({ data }: { data: any[] }) => {
  let trails = [
    {
      imgs: data.slice(0, data.length / 2),
      animation: {
        y: 0,
        playScale: [0, 1.5],
      },
      style: {
        transformY: 0,
      },
    },
    {
      imgs: data.slice(data.length / 2, data.length),
      animation: {
        y: 0,
        playScale: [0, 1.5],
      },
      style: {
        transformY: 0,
      },
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className={styles.photowall}>
      {trails.map((row, rowi) => (
        <Parallax
          animation={row.animation}
          style={row.style}
          className={styles.wrap}
          key={rowi}
        >
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

export default Film;
