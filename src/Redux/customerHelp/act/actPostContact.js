import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";


 const actPostContact = createAsyncThunk(
  "contact/actPostContact",
  async (formData, { rejectWithValue }) => {
    try {

      const { data } = await axios.post("http://localhost:3001/contacts?", {
        firstName:formData.firstName,
        lastName:formData.lastName,
        email:formData.email,
        phone:formData.phone,
        id:formData.id,
        message: formData.message
      });
      return data;
    } catch (err) {
      return rejectWithValue(axiosEHandler(err));
    }
  }
);

export default actPostContact;