import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API ديناميكي
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState();

    const orderItems = cart.productFullInfo.map((el) => ({
      id: el.id,
      name: el.name,
      price: el.price,
      img: el.imgSrc,
      description: el.description,
      quantity: cart.items[el.id],
    }));

    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.post(
        `${API_URL}/orders`,
        {
          userId: auth.user?.id,
          items: orderItems,
          subtotal,
        },
        {
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actPlaceOrder;
