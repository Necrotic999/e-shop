import { createAsyncThunk } from "@reduxjs/toolkit";
import { storeApi } from "../../config/storeApi";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await storeApi.get("/products");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
