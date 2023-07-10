"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { animated, useSpring, useScroll } from "@react-spring/web";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Parallax } from "rc-scroll-anim";
import PhotoWall from "../photowall";
import {FilmFall} from "../filmfall";
import {Film} from "../filmscroll";
import {Nav} from "../nav";
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
    animation: {
      x: 0,
      playScale: [0, 1.5],
    },
  },
  {
    imgs: arrs[1],
    animation: {
      x: -500,
      playScale: [0, 1.3],
    },
  },
  {
    imgs: arrs[2],
    animation: {
      x: 0,
      playScale: [0, 1.3],
    },
  },
];
const films = Array.from({ length: 12 }, (v, k) => {
  return {
    label: `F/4.0\n30\nISO 1250`,
    img: `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k}.webp`,
  };
});
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
    let lang = navigator.language||navigator.userLanguage;
    let promise = document.querySelector('video').play();
  }, []);
  return (
    <div className={styles.countainer}>
        <Nav title={`GZXM`}></Nav>
        <section className={styles.video}>
          <video controls={false}  muted autoplay loop={true} poster={`https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-1`}>
            <source src="https://ginzaxiaoma.com/static/images/index.mp4" type="video/mp4"/>
          </video>
        </section>
        <Film data={films} title={`GinzaXiaoma`}></Film>
        <section className={styles.wrap}>
          <div className={styles.title} id="h1">
            <h1>GZXM</h1>
            <h2>Hermès Boutique Tokyo</h2>
          </div>
          <PhotoWall data={photos}></PhotoWall>
        </section>
        <FilmFall data={films} title={`GinzaXiaoma`}></FilmFall>
      <section className={styles.scroller}></section>
    </div>
  );
};

export default Zswiper;
