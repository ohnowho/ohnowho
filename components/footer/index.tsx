"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const Footer = ({ data,content }: { data: {img: string, url: string}[],content: {title: string, text: string} }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.footer}>
      <h3>{content.title}</h3>
      <div className={styles.platforms}>
        {data.map((item, i) => (
          <a key={i} href={item.url} style={{backgroundImage: `url('${item.img}')`}}></a>
        ))}
      </div>
      <p>{content.text}</p>
    </div>
  );
};
