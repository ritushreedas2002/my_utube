import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice';
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
    
const Store=configureStore({
    reducer:{
        app:navReducer,
        search: searchSlice,
        chat: chatSlice,
    }
})
export default Store;