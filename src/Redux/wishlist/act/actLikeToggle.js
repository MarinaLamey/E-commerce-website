import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    const userId = auth.user.id;

    try {
      // جلب wishlist للمنتج الحالي
      const userWishlist = await axios.get(`${API_URL}/wishlist?productId=${id}`);

      if (userWishlist.data.length > 0) {
        // إذا موجود، نحذفه
        await axios.delete(`${API_URL}/wishlist/${userWishlist.data[0].id}`);
        return { type: "remove", id };
      } else {
        // إذا مش موجود، نضيفه
        await axios.post(`${API_URL}/wishlist`, { userId, productId: id });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actLikeToggle;
