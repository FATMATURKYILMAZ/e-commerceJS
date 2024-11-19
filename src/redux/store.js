import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice'

// store'u bir değişken olarak tanımlıyoruz
export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products:productSlice
  },
});
