"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";


export const Nav = ({title,logo }: { title: String,logo:String }) => {

  useEffect(() => {}, []);
  return (
    <div className={styles.nav}>
      <p className={styles.left}>
        
      </p>
      <p className={styles.right}>

      </p>
    </div>
  );
};


