import React from "react";
import css from "./Footer.module.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import icons from "../../images/icons.svg";

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className={css.logo_container}>
        <Link to="/">
          <img src={Logo} alt="stuff" />
        </Link>
      </div>
      <div className={css.text}>
        Develop by <span>Lytvynchuk Illa</span>
      </div>
      <div className={css.wrapper}>
        <a href="https://t.me/Necrotic_999">
          <svg width="22" height="22" className={css.icons}>
            <use xlinkHref={`${icons}#icon-telegram`} />
          </svg>
        </a>
        <a href="https://www.instagram.com/_lit.va/">
          <svg width="22" height="22" className={css.icons}>
            <use xlinkHref={`${icons}#icon-instagram`} />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/illia-lytvynchuk-30312b303/">
          <svg width="22" height="22" className={css.icons}>
            <use xlinkHref={`${icons}#icon-linkedin`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
