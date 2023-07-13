"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import {Lang} from "../lang";
export const Nav = ({ title, logo }: { title: String; logo: String }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.nav}>
      <div className={styles.wrap}>
        <picture>
          <source srcset={logo} media={`(min-width: 1000px)`} />
          <img src={logo} />
        </picture>
        <span class={styles.title}>{title}</span>
        <Lang></Lang>
      </div>
    </div>
  );
};
