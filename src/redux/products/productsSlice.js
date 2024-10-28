import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./operations";

const initialState = {
  products: [],
  //   filtered: [],
  //   related: [],
  isLoading: false,
};

const slice = createSlice({
  name: "products",
  initialState: initialState,
  selectors: {
    selectProducts: (state) => state.products,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const productsReducer = slice.reducer;
export const { selectProducts } = slice.selectors;
