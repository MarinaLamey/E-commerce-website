import { createSlice } from "@reduxjs/toolkit";
import actGetproducts from "./act/actGetproducts";
import actGetproductsOffers from "./act/actGetproductsoffer";
import  actGetbeautyOffers from "./act/actGetbeautyOffers"
import actGetProductsSection from "./act/actGetProductsSection.js";
import actGetOffersProducts from "./act/actGetOffersProducts.js";

const initialState= {
    records: [],
    offers:[],
    electronicoffers:[],
    beautyOffers:[],
    secProduct:[],
    loading: "idle",
    error: null,
  };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
      productsCleanUp: (state) => {
        state.records = [];
        state.beautyOffers =[];
        state.electronicoffers=[];
        state.secProduct=[];
        state.offers=[]
      }
    },
    extraReducers: (builder) => {

        builder.addCase(actGetproducts.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetproducts.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.records = action.payload;
         
        });
        builder.addCase(actGetproducts.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
          }
        });
      
 // electronic offers
          builder.addCase(actGetproductsOffers.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetproductsOffers.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.electronicoffers = action.payload;
         
        });
        builder.addCase(actGetproductsOffers.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         
          }
        })

 // beauty offers 
         builder.addCase(actGetbeautyOffers.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetbeautyOffers.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.beautyOffers = action.payload;
         
        });
        builder.addCase(actGetbeautyOffers.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         
          }
        })       

        //sections products 
          builder.addCase(actGetProductsSection.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetProductsSection.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.secProduct = action.payload;
         
        });
        builder.addCase(actGetProductsSection.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         
          }
        }) 
        
          //All Offers products 
          builder.addCase(actGetOffersProducts.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetOffersProducts.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.offers = action.payload;
         
        });
        builder.addCase(actGetOffersProducts.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         
          }
        }) 
      },

})

export const { productsCleanUp} = productsSlice.actions;
export {actGetproducts , actGetproductsOffers ,actGetbeautyOffers , actGetProductsSection , actGetOffersProducts } ;

export default productsSlice.reducer;