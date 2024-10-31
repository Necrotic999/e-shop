import { useState, useEffect } from "react";
import css from "./Product.module.css";
import { Link } from "react-router-dom";
const Product = ({ title, images, price, description }) => {
  const sizes = [4, 4.5, 5];
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const [currentSize, setCurrentSize] = useState(sizes[1]);
  return (
    <section className={css.product}>
      <div className={css.img_wrapper}>
        <img src={currentImage} alt="" className={css.current} />
        <ul className={css.img_list}>
          {images.map((image, i) => (
            <li key={i} className={css.img_item}>
              <img
                className={css.image}
                src={image}
                alt=""
                onClick={() => setCurrentImage(image)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={css.info}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.price}>{price}$</p>
        <div className={css.color}>
          <span className={css.span}>Color: </span> Green
        </div>
        <div className={css.size}>
          <span className={css.span}>Sizes:</span>
          <ul className={css.list}>
            {sizes.map((size) => (
              <li
                key={size}
                className={`${css.item} ${
                  currentSize === size ? css.active : ""
                }`}
                onClick={() => setCurrentSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <p className={css.desc}>{description}</p>
        <div className={css.wrapper}>
          <button className={css.btnCart}>Add to cart</button>
          <button className={css.btnFavorites}>Add to favorites</button>
        </div>
        <div className={css.bottom}>
          <p className={css.bottom_text}>19 people purchased</p>
          <Link to="/" className={css.link}>
            Return to store
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
