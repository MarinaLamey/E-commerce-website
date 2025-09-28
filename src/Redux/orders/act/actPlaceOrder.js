import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";



const actPlaceOrder = createAsyncThunk('orders/actPlaceOrder' , async(subtotal , thunkAPI) => {
 const { rejectWithValue, getState } = thunkAPI;
 const { cart, auth } = getState() 


    const orderItems = cart.productFullInfo.map((el) => ({
      id: el.id,
      name: el.name,
      price: el.price,
      img: el.imgSrc,
      discription:el.discription,
      quantity: cart.items[el.id],
    }));

    try{
    const res = await axios.post("http://localhost:3001/orders", {
        userId: auth.user?.id,
        items: orderItems,
        subtotal,
      });

      return res.data;
    }catch(error){
    rejectWithValue(axiosEHandler(error))
    }
})

export default  actPlaceOrder;