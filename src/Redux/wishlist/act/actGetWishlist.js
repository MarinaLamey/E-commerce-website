import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetWishlistProduct = createAsyncThunk(
  "wishlist/actGetWishlistProduct",
  async (dataType, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState();

    try {
      // جلب wishlist للمستخدم
      const userWishlist = await axios.get(`${API_URL}/wishlist?userId=${auth.user.id}`, { signal });

      if (!userWishlist.data.length) {
        return { data: [], dataType: "empty" };
      }

      if (dataType === "ProductIds") {
        const productId = userWishlist.data.map((item) => item.productId);
        return { data: productId, dataType: "ProductsIds" };
      } else {
        // جلب معلومات كاملة عن المنتجات
        const ids = userWishlist.data.map((item) => item.productId).join("&id=");
        const response = await axios.get(`${API_URL}/products?id=${ids}`, { signal });

        return { data: response.data, dataType: "ProductsFullInfo" };
      }
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetWishlistProduct;

