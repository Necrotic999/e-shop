import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operations";

const initialState = {
  categories: [],
  isLoading: false,
};

const slice = createSlice({
  name: "categories",
  initialState: initialState,
  selectors: {
    selectCategories: (state) => state.categories,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const categoriesReducer = slice.reducer;
export const { selectCategories } = slice.selectors;
