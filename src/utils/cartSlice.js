import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItem: (state, action)=>{ // here dispatch action is addItem. and the arrow function is reducer function.
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0; // [] it will do it our array empty.
        },
    }
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;