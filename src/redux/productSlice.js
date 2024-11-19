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
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

export const getCategoryProducts = createAsyncThunk('products/getCategoryProducts', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
});

export const getDetailProducts = createAsyncThunk('products/getDetailProducts', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
});

// Slice oluşturma
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAIL;
            })
            .addCase(getDetailProducts.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProducts.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getDetailProducts.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL;
            })
            .addCase(getCategoryProducts.pending, (state) => {
                state.categoryProductsStatus = STATUS.LOADING;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.categoryProductsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state) => {
                state.categoryProductsStatus = STATUS.FAIL;
            });
    }
});

export default productSlice.reducer;

