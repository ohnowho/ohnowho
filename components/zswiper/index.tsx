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


const photowall = arr.slice(0,18);
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
function initData(res){
  let records = res.data.records;
  let data = {};
  for(let obj of records){
    let item = obj.fields;
    data[item.key] = JSON.parse(item.value)
  }
  return data
}
const Zswiper = ({res}:{res:any}) => {
  console.log(res)
  const [data, setData] = useState(initData(res))
  const logo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEXNq4ObgmOKdFiReV3AoHrbt4skHhcAAAAWEw+ukm8tJh0NCwhEOSyEb1QxKR9SRTV+alA9Mye2mXX2zpztxpf/3qmhh2caFhFHOy0gGxV8aFByYEliUz/hvI8RDws2LSPnwpPHp4BuXEb60Z//1qNYSjn/36mWBsQQAAABiklEQVR4AYXThYKEIABFUVjBZwdgMIKBMP//iduBW3fCOrYSQh/+KGGEp/ijLCe8+Aukn6BEVHkBZZXkeV43eK6led6lMUDWC6lqvFTkKinKCwAqMowTnptZroFvADelFjxHWYWfgM4H9rymYTf8APoSxj4fRSbohHW7gkzMKJOBp6ifxmDEegHpPmpURNLqcEDB+BX0SraAOyVJUsD4XV9AUANNUQgvq+cLcVdbDMqFe2UwUX86wFmu2hhkD4KcY9kT7smm6TEqFwM9Usf3uiOO+4ckd53qyggUol5HvwuHRVlFV/f0i0BDbgj8zoCSebkgyHyKwGYNGvYMsFhfY5aHjsC8B7TkzgPg7HD0jbRpBMJeISfEC0Ac1tNCySYCiy3qvTO7DS0LiecJl9VXsNaqtjKAngerEeygpAxfwZSoZBxnzPa0FZpasF26r6Bhe6tTjTU5xxXlpCvm8+0LCIQHPLeJHs+tlJNb+gF0MMZk0evRtMb17+CP/gU6J6oL5vduhCyh/aPgHgGrGDBa7alAqQAAAABJRU5ErkJggg==`;

  // const [data, setData] = useState({
  //   nav: {
  //     title: 'GINZA XIAOMA',
  //     logo: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEXNq4ObgmOKdFiReV3AoHrbt4skHhcAAAAWEw+ukm8tJh0NCwhEOSyEb1QxKR9SRTV+alA9Mye2mXX2zpztxpf/3qmhh2caFhFHOy0gGxV8aFByYEliUz/hvI8RDws2LSPnwpPHp4BuXEb60Z//1qNYSjn/36mWBsQQAAABiklEQVR4AYXThYKEIABFUVjBZwdgMIKBMP//iduBW3fCOrYSQh/+KGGEp/ijLCe8+Aukn6BEVHkBZZXkeV43eK6led6lMUDWC6lqvFTkKinKCwAqMowTnptZroFvADelFjxHWYWfgM4H9rymYTf8APoSxj4fRSbohHW7gkzMKJOBp6ifxmDEegHpPmpURNLqcEDB+BX0SraAOyVJUsD4XV9AUANNUQgvq+cLcVdbDMqFe2UwUX86wFmu2hhkD4KcY9kT7smm6TEqFwM9Usf3uiOO+4ckd53qyggUol5HvwuHRVlFV/f0i0BDbgj8zoCSebkgyHyKwGYNGvYMsFhfY5aHjsC8B7TkzgPg7HD0jbRpBMJeISfEC0Ac1tNCySYCiy3qvTO7DS0LiecJl9VXsNaqtjKAngerEeygpAxfwZSoZBxnzPa0FZpasF26r6Bhe6tTjTU5xxXlpCvm8+0LCIQHPLeJHs+tlJNb+gF0MMZk0evRtMb17+CP/gU6J6oL5vduhCyh/aPgHgGrGDBa7alAqQAAAABJRU5ErkJggg==`,
  //   },
  //   section1: {
  //     videoConfig : {
  //       src: `https://ginzaxiaoma.com/static/images/index.mp4`,
  //       poster: `https://uploads-ssl.webflow.com/60eeb025115a75902b86a796/636012e25de4aa1981aed859_amelia-frame-7.jpg`,
  //       type: `video/mp4`,
  //     }
  //   },
  //   section2: {
  //     content: {
  //       title: `INTRO`,
  //       subtitle: `INTRO SUBTITLE`,
  //       text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
  //     }
  //   },
  //   section3:{
  //     photowall,
  //     content: {
  //       title: `GZXM`,
  //       subtitle: `Hermès Boutique Tokyo`
  //     }
  //   },
  //   section4: {
  //     content: {
  //       title: `PORTRAIT`,
  //       subtitle: `PORTRAIT SUBTITLE`,
  //       text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
  //     }
  //   },
  //   section5: {
  //     films,
  //   },
  //   section6: {
  //     content: {
  //       title: `BUSINESS CATEGORY`,
  //       subtitle: `BUSINESS SUBTITLE`,
  //       text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
  //     }
  //   },
  //   section7: {
  //     swiperData
  //   },
  //   section8: {
  //     content: {
  //       title: `BUSINESS STORY`,
  //       subtitle: `BUSINESS SUBTITLE`,
  //       text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
  //     }
  //   },
  //   section9: {
  //     films,
  //     content: {
  //       title: `BUSINESS STORY DETAIL`,
  //       text: `This photograph is of Grace, aged 100. She is one of my subjects for the long-term project Enugu is in the hands of God where I explore the materiality of Catholic life, among other aspects of Christianity, here in Enugu. The story behind capturing this photograph represents the most important aspects of my work: consent, connection and collaboration.

  //       I met Grace spontaneously in August through her granddaughter, Amara. That day my project collaborator and I visited Amara’s home to hear her story as a Catholic woman. When we arrived, it happened that Grace was home too and Amara assured us her grandmother would be eager to share her story as well.
        
  //       The way Grace welcomed us to her space was a gift for many reasons. As there is often a language barrier between people of my grandparents’ generation and my own generation, it was a rare moment where the elder was willing to speak to me, a stranger, through her granddaughter Amara as the translator.
        
  //       Two weeks later I lost all the photographs that we had shot during our visit. Although frustrating, I saw it as an opportunity to return, to Amara and her grandmother, at least to deepen the connection we had made. When I arrived, it turned out that the family had been very unhappy with our initial encounter. They are a deeply religious and spiritual family and felt our approach lacked sensitivity to a subject that is very personal.
        
  //       Coming back the second time, courtesy of losing the photos the first time, allowed me to learn from them, make amends and build up trust. It was such a special moment in the project for me and a reminder that access to people’s lives and spaces is a gift, not to be taken for granted.`
  //     }
  //   },
  //   section10: {
  //     content: {
  //       title: `ENDING`,
  //       subtitle: `ENDING SUBTITLE`,
  //       text: `Throughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.\n\nThroughout the month of June, GINZA XIAOMA members will be rewarded double points for all purchases across all platforms.`,
  //     }
  //   },
  //   footer: {
  //     platforms,
  //     content: {
  //       title:`GET IN TOUCH`,
  //       text: `Chuo-Ku, Tokyo, Japan, 104-0061\nGINZA XIAOMA ⓒ 2022`
  //     }
  //   }
  // });
  let json = JSON.stringify(data);
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
          <PhotoWall data={data.section3.photowall} content={data.section3.content}></PhotoWall>
        </section>
        <section>
          <Paragraph data={data.section4.content}></Paragraph>
        </section>
        <section> <FilmFall data={data.section5.films} title={``}></FilmFall></section>
        <section><Paragraph data={data.section6.content}></Paragraph></section>
        <section><MySwiper data={data.section7.swiperData}></MySwiper></section>
        <section><Paragraph data={data.section8.content}></Paragraph></section>
        <section><Film data={data.section9.films} content={data.section9.content}></Film></section>
        <section><Paragraph data={data.section10.content}></Paragraph></section>
        <section><Footer data={data.footer.platforms} content={data.footer.content}></Footer></section>


      </div>
    </div>
  );
};

export default Zswiper;
