import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTransaction,getAllTransactions } from "../Features/transaction/transactionSlice";

export default function Form() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('income')
    const state = useSelector(state => console.log(state))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTransactions())
    },[dispatch])

    // console.log(state)
    const handleForm = e => {
        e.preventDefault()
        dispatch(postTransaction({
            name,
            amount: Number(amount),
            type
        }))
    }
    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form
                onSubmit={handleForm}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="My Salary"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="income"
                            checked={type === 'income'}
                            onChange={e => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="expense"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={e => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <labe>Amount</labe>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn" type='submit'>Add Transaction</button>
            </form>
            <button className="btn cancel_edit">Cancel Edit</button>

            
        </div>
    );
}
