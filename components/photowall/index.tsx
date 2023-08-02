"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";
// import { Parallax } from "../Parallax/index";
import ScrollParallax from "../Parallax/es/ScrollParallax";
const PhotoWall = ({ data,content }: { data: any[],content:any }) => {
  function spArr(arr, num) {
    let newArr = [];
    let len = Math.floor(arr.length/num)
    for (let i = 0; i < arr.length; ) {
      newArr.push(arr.slice(i, i + len));
      i = i + len;
    }
    return newArr;
  }
  let arrs = spArr(data, 3);
  const trails = [
    {
      imgs: arrs[0],
      animation: {
        x: 0,
        playScale: [0, 1.3],
      },
    },
    {
      imgs: arrs[1],
      animation: {
        x: `-80%`,
        playScale: [0, 1.6],
      },
    },
    {
      imgs: arrs[2],
      animation: {
        x: 0,
        playScale: [0, 2],
      },
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
      </div>
      <div className={styles.photowall} id={`photowall`}>
        {trails.map((row, rowi) => (
          <ScrollParallax
            animation={row.animation}
            className={styles.wrap}
            key={rowi}
            location="photowall"
          >
            <ul key={rowi}>
              {row.imgs.map((item, itemi) => (
                <li key={itemi}>
                  <img src={item}></img>
                </li>
              ))}
            </ul>
          </ScrollParallax>
        ))}
      </div>
    </div>
  );
};

export default PhotoWall;
