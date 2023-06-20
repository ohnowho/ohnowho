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
        playScale: [1, 9],
      },
      style: {
        transform: 'translateY(-2000px)'
      }
    },
    {
      imgs: data.slice(data.length / 2, data.length),
      animation: {
        y: -2000,
        playScale: [0,6],
      },
    }
  ];
  useEffect(() => {}, []);
  return (
    <div className={styles.film} >
      <div className={styles.title}></div>
      <div className={styles.countainer}>
      {trails.map((row, rowi) => (
        <Parallax
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
