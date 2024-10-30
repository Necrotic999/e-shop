import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/routes/AppRoutes";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./redux/categories/operations";
import { getProducts } from "./redux/products/operations";
import Products from "./components/Products/Products";
import {
  selectFilteredProducts,
  selectProducts,
} from "./redux/products/productsSlice";
import { useSelector } from "react-redux";
import Categories from "./components/Categories/Categories";
import { selectCategories } from "./redux/categories/categoriesSlice";
import Banner from "./components/Banner/Banner";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <AppRoutes />
      </div>
      <Products products={products} amount={5} title="Trending" />
      <Categories categories={categories} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filteredProducts} amount={5} title="Less then 100$" />

      <Footer />
    </div>
  );
}

export default App;
