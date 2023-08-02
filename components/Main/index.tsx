"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { PhotoWall } from "../photowall";
import { FilmFall } from "../filmfall";
import { Film } from "../filmscroll";
import { Nav } from "../nav";
import { VideoPlayer } from "../VideoPlayer";
import { Paragraph } from '../paragraph';
import { MySwiper } from '../swiper';
import { Footer } from '../footer';

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
  const [data, setData] = useState(initData(res))

  useEffect(() => {
    console.log(data)
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
        <Nav title={data.nav.title} logo={data.nav.logo} language={data.nav.language}></Nav>
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
