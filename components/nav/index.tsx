"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import {Lang} from "../lang";
export const Nav = ({ title, logo,language }: { title: string; logo: string,language: string }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.nav}>
      <div className={styles.wrap}>
        <picture>
          {/* <source src={logo} media={`(min-width: 1000px)`} /> */}
          {logo ? <img src={logo} /> : null}
        </picture>
        <span className={styles.title}>{title}</span>
        {language ? (
          <Lang language={language}></Lang>
        ) : (
          <span className={styles.placeholder}></span>
        )}
      </div>
    </div>
  );
};
