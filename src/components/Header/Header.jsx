import React from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import icons from "../../images/icons.svg";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo_container}>
        <Link to="/">
          <img src={Logo} alt="stuff" />
        </Link>
      </div>
      <div className={css.user}>
        <div className={css.avatar}>
          <svg width="20" height="20">
            <use xlinkHref={`${icons}#icon-avatar`} />
          </svg>
        </div>
        <div className={css.username}>Guest</div>
      </div>
      <SearchForm />
      <div className={css.icons_wrapper}>
        <Link to="/" className={css.favorite}>
          <svg width="20" height="20" className={css.icon_heart}>
            <use xlinkHref={`${icons}#icon-heart`} />
          </svg>
        </Link>
        <Link to="/cart" className={css.cart}>
          <svg width="20" height="20" className={css.icon_bag}>
            <use xlinkHref={`${icons}#icon-bag`} />
          </svg>
          <span className={css.count}>2</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
