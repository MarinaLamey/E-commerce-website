import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";

// رابط API ديناميكي (لو حبيتي تغيّريه مستقبلاً)
const API_URL = process.env.REACT_APP_PRODUCTS_API || "https://68da97d423ebc87faa30ade4.mockapi.io";

const actGetOffersProducts = createAsyncThunk(
  "products/actGetOffersProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products?isOffer=true`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetOffersProducts;
