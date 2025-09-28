import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
import { axiosEHandler } from "../../../utils/index";
const actLikeToggle= createAsyncThunk("wishlist/actLikeToggle" , async(id , thunkAPI)=>{
     const { rejectWithValue, fulfillWithValue , getState} = thunkAPI;
   const { auth } = getState()
   const userId = auth.user.id;
     try{
        const userWishlist = await axios.get(`http://localhost:3001/wishlist?productId=${id}`)
      
       if (userWishlist.data.length > 0){
       await axios.delete(`http://localhost:3001/wishlist/${userWishlist.data[0].id}`)
       return{type:"remove" , id};
       }else{
        await axios.post("http://localhost:3001/wishlist?" , {userId , productId:id})
          return{type:"add" , id};
       }
        

     }catch(error){
     return rejectWithValue( axiosEHandler(error ))
    
     }
})

export default actLikeToggle;