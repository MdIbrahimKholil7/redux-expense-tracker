import Fetcher from "../../components/utils/Fetcher"

export const getTransaction = async () => {
    const { data } = await Fetcher.get('/transactions')
 
    return data
}

export const getTransactions = async () => {
    const { data } = await Fetcher.get('/transactions')
 
    return data
}

export const addTransaction = async (postData) => {
    const { data } = await Fetcher.post('/transactions', postData)
    return data
}

export const editTransaction = async (id, postData) => {
    const { data } = await Fetcher.put(`/transactions/${id}`, postData)
    return data
}

export const deleteTransaction = async (id) => {
    const { data } = await Fetcher.delete(`/transactions/${id}`)
    return data
}
