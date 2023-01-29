import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6393b5f2ab513e12c514f63c.mockapi.io/api";

export const fetchComments = createAsyncThunk(
  "comments/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/comments");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
