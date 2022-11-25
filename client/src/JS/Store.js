import userSlice from "./userSlice/userSlice"; 
import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./productSlice/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product:productSlice
}
})