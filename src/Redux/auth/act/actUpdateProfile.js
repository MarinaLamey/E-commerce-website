import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

 const actUpdateProfile = createAsyncThunk(
  "auth/actUpdateProfile",
  async( data , thunkAPI) => {
      const { rejectWithValue , getState} = thunkAPI;
        const { auth } = getState()

    try {
      const res = await axios.patch(`http://localhost:3001/users/${auth.user.id}`, 
    data
      );
      return res.data; 
    } catch (err) {
      return rejectWithValue(axiosEHandler(err));
    }
  }
);

export default actUpdateProfile