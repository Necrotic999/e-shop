import React from "react";
import { Link } from "react-router-dom";
import css from "./Products.module.css";

const Products = ({ title, style = {}, products = [], amount }) => {
  const productList = products.filter((_, i) => i < amount);

  return (
    <section className={css.products}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.product_list}>
        {productList.map((product) => (
          <li key={product.id} className={css.product_item}>
            <Link to={`/products/${product.id}`} className={css.link}>
              <img
                src={product.images[0]}
                alt="product"
                className={css.image}
              />
              <div className={css.wrapper}>
                <h3 className={css.product_title}>{product.title}</h3>
                <p className={css.desc}>{product.category.name}</p>
                <div className={css.info}>
                  <div className={css.prices}>
                    <p className={css.price}>{product.price}$</p>
                    <p className={css.old_price}>
                      {Math.floor(product.price * 0.8)}$
                    </p>
                  </div>

                  <p className={css.purchases}>
                    {Math.floor(Math.random() * 20 + 1)} purchases
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
