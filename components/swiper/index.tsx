"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Swiper } from 'antd-mobile'

export const MySwiper = ({ data }: { data: any[]}) => {
  let row = {
      animation: {
        x: 0,
        playScale: [0, 0],
      },
      style: {
        // transform: 'translateY(-2000px)'
        // willChange: `transform`,
        // transform: `translate3d(380rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        // transformStyle: `preserve-3d`
      }
    };
  useEffect(() => {}, []);
  return (
    <div className={styles.swiper} id="paraswiper" >
      <div className={styles.countainer}>
          <Swiper slideSize={85} trackOffset={7.5} loop stuckAtBoundary={true} indicator={() => null}>
            {data.map((item, index) => (
                <Swiper.Item key={index}>
                  <li  style={{backgroundImage: `url('${item.img}')`}}>
                    <div>
                      {Object.keys(item.content).map((key, i) => (
                        <p key={key} className={styles[key]}>{data[key]}</p>
                      ))}
                    </div>
                  </li>
              </Swiper.Item>
            ))}
          </Swiper>
      </div>
    </div>
  );
};
