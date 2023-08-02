"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Parallax } from "rc-scroll-anim";

export const Film = ({ data,title }: { data: any[],title: String }) => {
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
      <p className={styles.header}>{title}</p>
      <div className={styles.text}>
        {`A decade has passed in a blink. This June, we are celebrating the 10th birthday of GINZA XIAOMA. With your continued love and support, we’ve come a long way from a simple dream to a growing global community: having departed from Ginza, Tokyo to arrive in Hong Kong, Singapore, and far beyond. To celebrate this milestone, we are launching a selection of events to express our sincerest gratitude to all of you for being a part of our journey.\n\nA decade has passed in a blink. This June, we are celebrating the 10th birthday of GINZA XIAOMA. With your continued love and support, we’ve come a long way from a simple dream to a growing global community: having departed from Ginza, Tokyo to arrive in Hong Kong, Singapore, and far beyond. To celebrate this milestone, we are launching a selection of events to express our sincerest gratitude to all of you for being a part of our journey.\n\n`}
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
