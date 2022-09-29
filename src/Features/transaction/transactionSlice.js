import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, editTransaction, getTransaction, getTransactions } from "../api/transactionApi"



// async thunks 
export const getAllTransactions = createAsyncThunk('transaction/getAllTransactions', async () => {
    const data = await getTransaction()
    return data
})
export const getAllTransaction = createAsyncThunk('transaction/getAllTransaction', async () => {
    const data = await getTransactions()
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
export const removeTransaction = createAsyncThunk('transaction/deleteTransaction', async (id) => {
    const result = await deleteTransaction(id)
    return result
})

const initialState = {
    isLoading: false,
    error: '',
    transactions: [],
    editing: {}
}

const transactionSlice = createSlice({

    name: 'transaction',
    initialState,
    reducers: {
        isActive: (state, action) => {
            state.editing = action.payload
        },
        isInActive: (state, action) => {
            state.editing = {}
        }

    },
    extraReducers: (builder) => {

        builder
            .addCase(getAllTransactions.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getAllTransactions.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.transactions = action.payload
            })
            .addCase(getAllTransactions.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                state.transactions = []
            })
            .addCase(getAllTransaction.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getAllTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.transactions = action.payload
            })
            .addCase(getAllTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                state.transactions = []
            })
            .addCase(postTransaction.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(postTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.transactions.push(action.payload)
            })
            .addCase(postTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                state.transactions = []
            })
            .addCase(updateTransaction.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                const index = state.transactions.findIndex(elem => elem.id === action.payload.id)
                state.isLoading = false
                state.error = ''
                state.transactions[index] = action.payload
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                state.transactions = []
            })
            .addCase(removeTransaction.pending, (state, action) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.transactions = state.transactions.filter(elem => elem.id !== action.meta.arg)
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
                state.transactions = []
            })
    }
}
)

const { reducer } = transactionSlice
export const { isActive, isInActive } = transactionSlice.actions
export default reducer
