import { combineReducers, configureStore , applyMiddleware  } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice"
import products from "./products/productsSlice"
import cart from './cart/cartSlice'
import wishlist from "./wishlist/wishlistSlice"
import bestsellerproducts from "./productsBestseller/bestsellerproductsSlice"
import infocusproducts from "./productsInfocus/infocusproductsSlice"
import auth from "./auth/authSlice"
import  orders from "./orders/ordersSlice"
import product from "./selectedProduct/selectedProductslice"
import sort from "./sorting/sortSlice"
import contact from "./customerHelp/customerhelpSlice"
import search from "./searchProducts/searchSlice"
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore , persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
 } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ["items"],
}
const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  whitelist: ["itemsId"],
}
const rootReducers = combineReducers(
  {
    categories ,
     products ,
      cart:persistReducer(cartPersistConfig , cart ),
      wishlist:persistReducer(wishlistPersistConfig, wishlist),
      bestsellerproducts, 
      infocusproducts ,
      auth: persistReducer(authPersistConfig, auth),
      orders,
      product,
      sort,
      contact,
      search
  }
)
const persistedReducer = persistReducer(rootPersistConfig, rootReducers);


 const store = configureStore({
    reducer:   persistedReducer ,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
   devTools:process.env.NODE_ENV !== "production",
  });

  const persistor = persistStore(store);

  export { store, persistor };