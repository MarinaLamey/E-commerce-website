import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط API ديناميكي (ممكن تغيّريه بسهولة في المستقبل)
const API_URL = process.env.REACT_APP_CATEGORIES_API || "https://68da97d423ebc87faa30ade4.mockapi.io";

const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get(`${API_URL}/categories`, { signal });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetcategories;
