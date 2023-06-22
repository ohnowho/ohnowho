"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

const Film = ({ data }: { data: any[] }) => {
  let trails = [
    {
      imgs: data.slice(0, data.length / 2),
      animation: {
        y: 1000,
        playScale: [0, 3],
      },
      style: {
        // transform: 'translateY(-2000px)'
        willChange: `transform`,
        transform: `translate3d(0px, -2000px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: `preserve-3d`
      }
    },
    {
      imgs: data.slice(data.length / 2, data.length),
      animation: {
        y: -2000,
        playScale: [0,6],
      },
      style: {
        // transform: 'translateY(-2000px)'
        willChange: `transform`,
        transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: `preserve-3d`
      }

    }
  ];
  useEffect(() => {}, []);
  return (
    <div className={styles.film} id="film" >
      <div className={styles.title}></div>
      <div className={styles.countainer}>
      {trails.map((row, rowi) => (
        <Parallax
          // targetId="film"
          location="film"
          animation={row.animation}
          className={styles.wrap}
          style={row.style}
          key={rowi}>
          <ul id={`row-${rowi}`} key={rowi}>
            {row.imgs.map((item, itemi) => (
              <li key={itemi}>
                <p>{item.label.split('\n').map((text,texti) => (
                  <span key={texti}>{text}</span>
                ))}</p>
                <img src={item.img}></img>
              </li>
            ))}
          </ul>
        </Parallax>
      ))}
      </div>
    </div>
  );
};

export default Film;
