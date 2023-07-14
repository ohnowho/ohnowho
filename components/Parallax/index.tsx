"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import ScrollParallax from "./es/ScrollParallax";
console.log(`ScrollParallax`,ScrollParallax)
export const Parallax = ({ animation, location }: any) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.parallax}>
      <ScrollParallax
        animation={animation}
        location={location}
      ></ScrollParallax>
    </div>
  );
};
