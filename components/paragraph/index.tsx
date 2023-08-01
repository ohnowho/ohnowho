"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const Paragraph = ({ data }: { data: any }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.Paragraph}>
      {Object.keys(data).map((key, i) => (
        <p key={key} className={styles[key]}>{data[key]}</p>
      ))}
    </div>
  );
};
