import { Link } from "react-router-dom";
import css from "./Categories.module.css";
const Categories = ({ title, categories = [], amount }) => {
  const categoryList = categories.filter((_, i) => i < amount);

  return (
    <section className={css.categories}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.category_list}>
        {categoryList.map((category) => (
          <li key={category.id} className={css.category_item}>
            <Link to={`/category/:${category.id}`} className={css.link}>
              <img src={category.image} alt="category" className={css.image} />
              <div className={css.wrapper}>
                <h3>
                  {category.name === "Change title"
                    ? "Furniture"
                    : category.name}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
