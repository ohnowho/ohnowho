"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { animated, useSpring, useScroll } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
const uls = [
  {
    imgs: arrs[0],
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
        <div className={styles.wrap}>
          {arrs.map((row, rowi) => (
            <ul id={`row-${rowi}`} key={rowi}>
              {row.map((item, itemi) => (
                <li key={itemi}>
                  <img src={item}></img>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div id="zswiper-scroll" className={styles.scroller}>
        <span></span>
      </div>
    </div>
  );
};

export default Zswiper;
