"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { PhotoWall } from "../photowall";
import { FilmFall } from "../filmfall";
import { Film } from "../filmscroll";
import { Nav } from "../nav";
import { Paragraph } from "../paragraph";
import { MySwiper } from "../swiper";
import { Footer } from "../footer";
import { MyVideo } from "../Video";

function initData(res:any): {key:string, value: any}[] {
  if (!res.data || !res.data.records) {
    return [];
  }
  let records = res.data.records;
  let data = [];
  for (let obj of records) {
    let item = obj.fields;
    data.push({
      key: item.key,
      value: JSON.parse(item.value),
    });
  }
  return data;
}
const Zswiper = ({ res }: { res: any }) => {
  const [data, setData] = useState(initData(res));

  useEffect(() => {

    // let lang = navigator.language || navigator.userLanguage;
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
  const renderMap = {
    Nav: (section: any) => {
      return <Nav title={section.title}  logo={section.logo} language={section.language}></Nav>;
    },
    Video: (section: any) => {
      return <MyVideo data={section.videoConfig}></MyVideo>;
    },
    Paragraph: (section: any) => {
      return <Paragraph data={section.content}></Paragraph>;
    },
    PhotoWall: (section: any) => {
      return <PhotoWall data={section.photowall} content={section.content}></PhotoWall>;
    },
    FilmFall: (section: any) => {
      return <FilmFall data={section.films} title={``}></FilmFall>;
    },
    Film: (section: any) => {
      return <Film data={section.films} content={section.content}></Film>;
    },
    Swiper: (section: any) => {
      return <MySwiper data={section.swiperData}></MySwiper>;
    },
    Footer: (section: any) => {
      return (
        <Footer data={section.platforms} content={section.content}></Footer>
      );
    },
  };
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        {data.map((section, i) => (
          <section key={i}>{renderMap[section.key as keyof typeof renderMap](section.value)}</section>
        ))}
      </div>
    </div>
  );
};

export default Zswiper;
