import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

// State'in tanımı
const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    categoryProductsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
};

// Thunk fonksiyonlarının tanımları
export const getSearchProducts = createAsyncThunk('products/searchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

// Slice oluşturma
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })
    }
});

export default searchSlice.reducer;