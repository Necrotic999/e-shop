import React from "react";
import css from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/categories/categoriesSlice";

const Sidebar = () => {
  const categories = useSelector(selectCategories);
  return (
    <section className={css.sidebar}>
      <h3 className={css.title}>CATEGORIES</h3>
      <nav>
        <ul className={css.category_list}>
          {categories.map((category) => {
            return (
              <li key={category.id} className={css.category_item}>
                <NavLink
                  className={({ isActive }) => `${isActive ? css.active : ""}`}
                  to={`/categories/:${category.id}`}
                >
                  {category.name === "Change title"
                    ? "Furniture"
                    : category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={css.link_wrapper}>
        <a href="/help" target="_blank" className={css.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={css.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
