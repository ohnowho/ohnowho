"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { animated, useSpring, useScroll } from "@react-spring/web";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Parallax } from "rc-scroll-anim";
import PhotoWall from "../photowall";
import { FilmFall } from "../filmfall";
import { Film } from "../filmscroll";
import { Nav } from "../nav";
import { VideoPlayer } from "../VideoPlayer";
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
const photowall = [
  {
    imgs: arrs[0],
    animation: {
      x: 0,
      playScale: [0, 2],
    },
  },
  {
    imgs: arrs[1],
    animation: {
      x: `-100%`,
      playScale: [0, 2],
    },
  },
  {
    imgs: arrs[2],
    animation: {
      x: 0,
      playScale: [0, 2],
    },
  },
];
const films = Array.from({ length: 12 }, (v, k) => {
  return {
    label: `F/4.0\n30\nISO 1250`,
    img: `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k}.webp`,
  };
});
const videoConfig = {
  src: `https://ginzaxiaoma.com/static/images/index.mp4`,
  poster: `https://uploads-ssl.webflow.com/60eeb025115a75902b86a796/636012e25de4aa1981aed859_amelia-frame-7.jpg`,
  type: `video/mp4`,
};
const Zswiper = () => {
  const logo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEXNq4ObgmOKdFiReV3AoHrbt4skHhcAAAAWEw+ukm8tJh0NCwhEOSyEb1QxKR9SRTV+alA9Mye2mXX2zpztxpf/3qmhh2caFhFHOy0gGxV8aFByYEliUz/hvI8RDws2LSPnwpPHp4BuXEb60Z//1qNYSjn/36mWBsQQAAABiklEQVR4AYXThYKEIABFUVjBZwdgMIKBMP//iduBW3fCOrYSQh/+KGGEp/ijLCe8+Aukn6BEVHkBZZXkeV43eK6led6lMUDWC6lqvFTkKinKCwAqMowTnptZroFvADelFjxHWYWfgM4H9rymYTf8APoSxj4fRSbohHW7gkzMKJOBp6ifxmDEegHpPmpURNLqcEDB+BX0SraAOyVJUsD4XV9AUANNUQgvq+cLcVdbDMqFe2UwUX86wFmu2hhkD4KcY9kT7smm6TEqFwM9Usf3uiOO+4ckd53qyggUol5HvwuHRVlFV/f0i0BDbgj8zoCSebkgyHyKwGYNGvYMsFhfY5aHjsC8B7TkzgPg7HD0jbRpBMJeISfEC0Ac1tNCySYCiy3qvTO7DS0LiecJl9VXsNaqtjKAngerEeygpAxfwZSoZBxnzPa0FZpasF26r6Bhe6tTjTU5xxXlpCvm8+0LCIQHPLeJHs+tlJNb+gF0MMZk0evRtMb17+CP/gU6J6oL5vduhCyh/aPgHgGrGDBa7alAqQAAAABJRU5ErkJggg==`;
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
    let lang = navigator.language || navigator.userLanguage;
    window.addEventListener(
      "click",
      (e) => {
        let video = document.querySelector("video");
        video && video.play();
      },
      false
    );
    setTimeout(() => {
      let video = document.querySelector("video");
      video && video.play();
    }, 100);
  }, []);
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <Nav title={`GZXM`} logo={logo} title={`GINZA XIAOMA`}></Nav>
        <section className={styles.video}>
          <img src={videoConfig.poster}></img>
          <video
            src={videoConfig.src}
            poster={videoConfig.poster}
            autoPlay
            loop
            muted
            playsInline={true}
            webkit-playsinline="true"
          ></video>
          {/* <VideoPlayer config={videoConfig}></VideoPlayer> */}
        </section>
        <section></section>
        {/* <Film data={films} title={``}></Film> */}
        <section className={styles.wrap}>
          <PhotoWall data={photowall}></PhotoWall>
        </section>
        <section></section>
        {/* <FilmFall data={films} title={``}></FilmFall> */}
        <section className={styles.scroller}></section>
      </div>
    </div>
  );
};

export default Zswiper;
