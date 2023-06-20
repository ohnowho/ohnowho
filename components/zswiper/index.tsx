"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { animated, useSpring, useScroll } from "@react-spring/web";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Parallax } from "rc-scroll-anim";
import PhotoWall from '../photowall';
const cdnHost = `/images`;
const arr = Array.from({ length: 12 }, (v, k) => {
  return `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k}.webp`;
});
function spArr(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; ) {
    newArr.push(arr.slice(i, (i += num)));
  }
  return newArr;
}
let arrs = spArr(arr, 4);
const photos = [
  {
    imgs: arrs[0],
    transformX: -600,
    x: 0,
    playScale:[0,1.5]
  },
  {
    imgs: arrs[1],
    transformX: 0,
    x: -500,
    playScale:[0,1.3]
  },
  {
    imgs: arrs[2],
    transformX: -600,
    x: 0,
    playScale:[0.2,1.3]
  },
];

const Zswiper = () => {
  const [offset, setOffset] = useState(0);
  const { scrollYProgress } = useScroll();
  const sty = useSpring({
    y: 24,
  });
  function handleScroll(e) {
    console.log(e);
    e.preventDefault();
  }
  function handleWheel(e) {
    console.log(e);
    e.preventDefault();
  }
  useEffect(() => {
    // window.addEventListener("wheel", handleScroll,{passive:false});
  }, []);
  return (
    <div className={styles.countainer}>
      <div className={styles.zswiper}>
        <div className={styles.title} id="h1">
          <h1>GZXM</h1>
          <h2>Hermès Boutique Tokyo</h2>
        </div>
        <PhotoWall data={photos} ></PhotoWall>
      </div>
      <div className={styles.scroller}></div>
    </div>
  );
};

export default Zswiper;
