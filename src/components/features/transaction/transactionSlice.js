import { createAsyncThunk } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, editTransaction, getTransaction } from "../api/transactionApi"

const initialState = {
    isLoading: false,
    error: '',
    transactions: []
}

// async thunks 
export const getAllTransactions = createAsyncThunk('transaction/getAllTransactions', async () => {
    const data = await getTransaction()
    return data
})
export const postTransaction = createAsyncThunk('transaction/postTransaction', async (data) => {
    const result = await addTransaction(data)
    return result
})
export const updateTransaction = createAsyncThunk('transaction/updateTransaction', async ({ id, data }) => {
    const result = await editTransaction(id, data)
    return result
})
export const removeTransaction = createAsyncThunk('transaction/updateTransaction', async ( id) => {
    const result = await deleteTransaction(id)
    return result
})





