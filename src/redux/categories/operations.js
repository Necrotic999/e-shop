import { createAsyncThunk } from "@reduxjs/toolkit";
import { storeApi } from "../../config/storeApi";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await storeApi.get("/categories?limit=5");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
