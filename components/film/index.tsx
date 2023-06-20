"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

function spArr(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; ) {
    newArr.push(arr.slice(i, (i += num)));
  }
  return newArr;
}

const PhotoWall = ({data}:{data: any[]}) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.photowall}>
      {data.map((row, rowi) => (
        <Parallax
          animation={{ x: row.x, playScale: row.playScale, replay: true }}
          style={{ transform: `translateX(${row.transformX}px)` }}
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
