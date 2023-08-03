import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

import "/styles/global.css";
import styles from "/styles/helloworlds.module.scss";
const cdnHost = `/images`;
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
const HelloWorlds = () => {
  const router = useRouter()

  return <div className={styles.helloworlds}>
   
  </div>;
};

export default HelloWorlds;
