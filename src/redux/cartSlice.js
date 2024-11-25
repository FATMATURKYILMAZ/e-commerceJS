import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () =>{
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart',JSON.stringify(data))
}

const initialState={
    carts:fetchFromLocalStorage(),
    itemCount:0,
    totalAmount:0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const updatedCart = state.carts.map(item => {
                if (item.id === action.payload.id) {
                    let tempQty = item.quantity + action.payload.quantity;
                    let tempTotalPrice = tempQty * item.price; // Assuming price exists in the item
                    return {
                        ...item,
                        quantity: tempQty,
                        totalPrice: tempTotalPrice
                    };
                }
                return item;
            });

            const isItemInCart = state.carts.some(item => item.id === action.payload.id);
            if (!isItemInCart) {
                state.carts.push({
                    ...action.payload,
                    totalPrice: action.payload.quantity * action.payload.price, // Assuming price exists in the payload
                });
            } else {
                state.carts = updatedCart;
            }
            
            storeInLocalStorage(state.carts);
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price*cartItem.quantity;
            }, 0);
            state.itemCount = state.carts.length;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
