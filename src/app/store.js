import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import transactionReducer from '../Features/transaction/transactionSlice'

const store = configureStore(
    {
        reducer: {
            transaction: transactionReducer,
        },
    },

    /* combineReducers({
        transaction: transactionReducer,
    }) */
);

/* 
const store=configureStore({
    reducer:{
        transactions:transactionReducer
    }
})
 */
export default store


