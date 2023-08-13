"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Swiper } from "antd-mobile";

export const MySwiper = ({
  data,
}: {
  data: {
    content: { title: string; subtitle: string; text: string };
    img: string;
  }[];
}) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.swiper} id="paraswiper">
      <div className={styles.container}>
        <Swiper
          slideSize={85}
          trackOffset={7.5}
          loop
          stuckAtBoundary={true}
          indicator={() => null}
        >
          {data.map((item, index) => (
            <Swiper.Item key={index}>
              <li
                className="li"
                style={{ backgroundImage: `url('${item.img}')` }}
              >
                <div>
                  {Object.keys(item.content).map((key, i) => (
                    <p key={key} className={styles[key]}>
                      {item.content[key as keyof typeof item.content]}
                    </p>
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
