"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const Paragraph = ({ data }: { data: {
  title: string,
  subtitle: string,
  text: string
} }) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.Paragraph}>
      {Object.keys(data).map((key, i) => (
        <p key={key} className={styles[key]}>{data[key as keyof typeof data]}</p>
      ))}
    </div>
  );
};
