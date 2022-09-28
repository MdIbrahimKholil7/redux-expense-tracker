import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import transactionReducer from '../Features/transaction/transactionSlice'

const store = configureStore(
    {
        reducer: {
            transaction: transactionReducer,
        },
    },

);

export default store


