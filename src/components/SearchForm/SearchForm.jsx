import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import icons from "../../images/icons.svg";

const SearchForm = () => {
  const initialValues = {
    search: "",
  };

  //   const validate = "";

  function handleSubmit(data, option) {
    console.log(data);

    option.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={validate}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <svg width="15" height="15" className={css.search_icon}>
            <use xlinkHref={`${icons}#icon-search`}></use>
          </svg>
        </div>
        <Field
          className={css.input}
          type="text"
          name="search"
          placeholder="Search for anything... "
        />
        {false && <div className={css.box}></div>}
      </Form>
    </Formik>
  );
};

export default SearchForm;
