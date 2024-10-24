import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./components/routes/AppRoutes";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./redux/categories/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
