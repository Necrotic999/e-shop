import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations";

const initialState = {
  products: [],
  filtered: [],
  //   related: [],
  isLoading: false,
};

const slice = createSlice({
  name: "products",
  initialState: initialState,
  selectors: {
    selectProducts: (state) => state.products,
    selectFilteredProducts: (state) => state.filtered,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.filtered = payload.filter(
          (filteredProduct) => filteredProduct.price < 100
        );
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const productsReducer = slice.reducer;
export const { selectProducts, selectFilteredProducts } = slice.selectors;
