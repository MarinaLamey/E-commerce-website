import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط API ديناميكي حسب البيئة
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actPostContact = createAsyncThunk(
  "contact/actPostContact",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${API_URL}/contacts`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        id: formData.id,
        message: formData.message,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      return data;
    } catch (err) {
      return rejectWithValue(axiosEHandler(err));
    }
  }
);

export default actPostContact;
