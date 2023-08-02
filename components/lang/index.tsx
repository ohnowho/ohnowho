"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const Lang = ({language}:{language: String}) => {
  useEffect(() => {}, []);
  return (
    <div className={styles.lang}>
      <span>{language}</span>
    </div>
  );
};
