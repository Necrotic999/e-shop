import React from "react";
import css from "./Hero.module.css";
import computer from "../../images/computer.png";

const Hero = () => {
  return (
    <section className={css.hero}>
      <p className={css.back_text}>BIG SALE 20%</p>
      <div className={css.product}>
        <div className={css.text_wrapper}>
          <p className={css.text}>The best seller of 2022</p>
          <h1 className={css.title}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={css.btn} type="button">
            Shop now
          </button>
        </div>
        <img src={computer} alt="computer" className={css.hero_img} />
      </div>
    </section>
  );
};

export default Hero;
