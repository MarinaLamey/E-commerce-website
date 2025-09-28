import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";




const getCartTotalQuantitySelector = createSelector(
    (state) => state.cart.items,
    (items) => {
      const totalQuantity = Object.values(items).reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        0
      );
      return totalQuantity;
    }
  );
  
  export{
getCartTotalQuantitySelector
  }