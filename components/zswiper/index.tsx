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
import { Paragraph } from '../paragraph';
import { MySwiper } from '../swiper';
import { Footer } from '../footer';
const cdnHost = `/images`;
const arr = Array.from({ length: 36 }, (v, k) => {
  return `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k%12}.webp`;
});
function spArr(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; ) {
    newArr.push(arr.slice(i, (i += num)));
  }
  return newArr;
}
let arrs = spArr(arr, 6);
const photowall = [
  {
    imgs: arrs[0],
    animation: {
      x: 0,
      playScale: [0, 1.3],
    },
  },
  {
    imgs: arrs[1],
    animation: {
      x: `-80%`,
      playScale: [0, 1.6],
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
const films = Array.from({ length: 36 }, (v, k) => {
  return {
    label: `F/4.0\n30\nISO 1250`,
    img: `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k%12}.webp`,
  };
});
const swiperData = Array.from({ length: 6 }, (v, k) => {
  return {
    content: {
      title: `DOUBLE POINTS`,
      subtitle: `FOR ALL PURCHASES ONLINE AND IN-STORE`,
      text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,  
    },
    img: `https://img.ginzaxiaoma.com/images/tenthAnniv/fresh0609/freshnew/sharestory-${k}.webp`,
  };
});
const platforms = [
  {
    img: '/images/platform/instagram.png',
    url: 'https://www.instagram.com/'
  },
  {
    img: '/images/platform/tiktok.png',
    url: 'https://www.tiktok.com/'
  },
  {
    img: '/images/platform/twitter.png',
    url: 'https://twitter.com/'
  },
  {
    img: '/images/platform/wechat.png',
    url: 'https://wechat.com/'
  }
]
const Zswiper = () => {
  const logo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEXNq4ObgmOKdFiReV3AoHrbt4skHhcAAAAWEw+ukm8tJh0NCwhEOSyEb1QxKR9SRTV+alA9Mye2mXX2zpztxpf/3qmhh2caFhFHOy0gGxV8aFByYEliUz/hvI8RDws2LSPnwpPHp4BuXEb60Z//1qNYSjn/36mWBsQQAAABiklEQVR4AYXThYKEIABFUVjBZwdgMIKBMP//iduBW3fCOrYSQh/+KGGEp/ijLCe8+Aukn6BEVHkBZZXkeV43eK6led6lMUDWC6lqvFTkKinKCwAqMowTnptZroFvADelFjxHWYWfgM4H9rymYTf8APoSxj4fRSbohHW7gkzMKJOBp6ifxmDEegHpPmpURNLqcEDB+BX0SraAOyVJUsD4XV9AUANNUQgvq+cLcVdbDMqFe2UwUX86wFmu2hhkD4KcY9kT7smm6TEqFwM9Usf3uiOO+4ckd53qyggUol5HvwuHRVlFV/f0i0BDbgj8zoCSebkgyHyKwGYNGvYMsFhfY5aHjsC8B7TkzgPg7HD0jbRpBMJeISfEC0Ac1tNCySYCiy3qvTO7DS0LiecJl9VXsNaqtjKAngerEeygpAxfwZSoZBxnzPa0FZpasF26r6Bhe6tTjTU5xxXlpCvm8+0LCIQHPLeJHs+tlJNb+gF0MMZk0evRtMb17+CP/gU6J6oL5vduhCyh/aPgHgGrGDBa7alAqQAAAABJRU5ErkJggg==`;
  const [data, setData] = useState({
    nav: {
      title: 'GINZA XIAOMA',
      logo: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEXNq4ObgmOKdFiReV3AoHrbt4skHhcAAAAWEw+ukm8tJh0NCwhEOSyEb1QxKR9SRTV+alA9Mye2mXX2zpztxpf/3qmhh2caFhFHOy0gGxV8aFByYEliUz/hvI8RDws2LSPnwpPHp4BuXEb60Z//1qNYSjn/36mWBsQQAAABiklEQVR4AYXThYKEIABFUVjBZwdgMIKBMP//iduBW3fCOrYSQh/+KGGEp/ijLCe8+Aukn6BEVHkBZZXkeV43eK6led6lMUDWC6lqvFTkKinKCwAqMowTnptZroFvADelFjxHWYWfgM4H9rymYTf8APoSxj4fRSbohHW7gkzMKJOBp6ifxmDEegHpPmpURNLqcEDB+BX0SraAOyVJUsD4XV9AUANNUQgvq+cLcVdbDMqFe2UwUX86wFmu2hhkD4KcY9kT7smm6TEqFwM9Usf3uiOO+4ckd53qyggUol5HvwuHRVlFV/f0i0BDbgj8zoCSebkgyHyKwGYNGvYMsFhfY5aHjsC8B7TkzgPg7HD0jbRpBMJeISfEC0Ac1tNCySYCiy3qvTO7DS0LiecJl9VXsNaqtjKAngerEeygpAxfwZSoZBxnzPa0FZpasF26r6Bhe6tTjTU5xxXlpCvm8+0LCIQHPLeJHs+tlJNb+gF0MMZk0evRtMb17+CP/gU6J6oL5vduhCyh/aPgHgGrGDBa7alAqQAAAABJRU5ErkJggg==`,
    },
    section1: {
      videoConfig : {
        src: `https://ginzaxiaoma.com/static/images/index.mp4`,
        poster: `https://uploads-ssl.webflow.com/60eeb025115a75902b86a796/636012e25de4aa1981aed859_amelia-frame-7.jpg`,
        type: `video/mp4`,
      }
    },
    section2: {
      content: {
        title: `DOUBLE POINTS`,
        subtitle: `FOR ALL PURCHASES ONLINE AND IN-STORE`,
        text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
      }
    },
    section3: {
      films,
      title: `Tokyo Store`
    },
    section5: {
      swiperData
    },
    footer: {
      platforms,
      content: {
        title:`GET IN TOUCH`,
        text: `Chuo-Ku, Tokyo, Japan, 104-0061\nGINZA XIAOMA ⓒ 2022`
      }
    }
  });
  const sty = useSpring({
    y: 24,
  });
  useEffect(() => {
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
        <Nav title={data.nav.title} logo={data.nav.logo}></Nav>
        <section className={styles.video}>
          <img src={data.section1.videoConfig.poster}></img>
          <video
            src={data.section1.videoConfig.src}
            poster={data.section1.videoConfig.poster}
            autoPlay
            loop
            muted
            playsInline={true}
            webkit-playsinline="true"
          ></video>
        </section>
        <section>
          <Paragraph data={data.section2.content}></Paragraph>
        </section>
        <section className={styles.wrap}>
          <PhotoWall data={photowall}></PhotoWall>
        </section>
        <section>
          <Paragraph data={data.section2.content}></Paragraph>
        </section>
        <section> <FilmFall data={films} title={``}></FilmFall></section>
        <section><Paragraph data={data.section2.content}></Paragraph></section>
        <section><MySwiper data={data.section5.swiperData}></MySwiper></section>
        <section><Paragraph data={data.section2.content}></Paragraph></section>
        <section><Film data={data.section3.films} title={data.section3.title}></Film></section>
        <section><Paragraph data={data.section2.content}></Paragraph></section>
        <section><Footer data={data.footer.platforms} content={data.footer.content}></Footer></section>


      </div>
    </div>
  );
};

export default Zswiper;
