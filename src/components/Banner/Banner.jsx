import css from "./Banner.module.css";
import shoes from "../../images/shoes.png";
import game from "../../images/game.png";

const Banner = () => {
  return (
    <section className={css.banner}>
      <div className={css.left}>
        <p className={css.text}>New Year</p>
        <p className={css.sale}>Sale</p>
        <button type="button" className={css.btn}>
          See more
        </button>
        <img src={shoes} alt="shoes" className={css.shoes} />
        <img src={game} alt="play station" className={css.game} />
      </div>
      <div className={css.right}>
        <p className={css.discount}>
          save up to <span className={css.span}>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
