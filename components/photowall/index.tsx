"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";
// import { Parallax } from "../Parallax/index";
import ScrollParallax from "../Parallax/es/ScrollParallax";
const PhotoWall = ({ data }: { data: any[] }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>GZXM</h1>
        <h2>Hermès Boutique Tokyo</h2>
      </div>
      <div className={styles.photowall} id={`photowall`}>
        {data.map((row, rowi) => (
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
