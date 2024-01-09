import { configureStore } from "@reduxjs/toolkit";
import navReducer from './navSlice';
import searchSlice from "./searchSlice";
    
const Store=configureStore({
    reducer:{
        app:navReducer,
        search: searchSlice,
    }
})
export default Store;