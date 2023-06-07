"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const cdnHost = `/images`;
let data = [];

const MainHeader = ({ lang, currency }: MainHeaderProps) => {
  useEffect(() => {
  }, []);
  return (
    <div className={styles.zswiper}>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <img src={item.img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainHeader;
