import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
