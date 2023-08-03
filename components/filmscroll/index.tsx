"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

export const Film = ({ data,content }: { data: any[],content: any }) => {
  let trails = [
    {
      imgs: data.slice(0, data.length / 2),
      animation: {
        x: `${-150 * data.length}rem`,
        playScale: [0, 6],
      },
      style: {
        // transform: 'translateY(-2000px)'
        willChange: `transform`,
        transform: `translate3d(400rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: `preserve-3d`
      }
    },
    {
      imgs: data.slice(data.length / 2, data.length),
      animation: {
        x: '100vw',
        playScale: [0,6],
      },
      style: {
        // transform: 'translateY(-2000px)'
        willChange: `transform`,
        transform: `translate3d(${-150 * (data.length + 3)}rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: `preserve-3d`
      }

    }
  ];
  useEffect(() => {}, []);
  return (
    <div className={styles.filmscroll} id="filmscroll" >
      <h3 className={styles.header}>{content.title}</h3>
      <div className={styles.text}>
        {content.text}
      </div>
      <div className={styles.container}>
        {trails.map((row, rowi) => (
          <Parallax
            // targetId="film"
            location="filmscroll"
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
