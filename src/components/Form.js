import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTransaction, getAllTransactions, updateTransaction } from "../Features/transaction/transactionSlice";

export default function Form() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('income')
    const state = useSelector(state => state)
    const { editing } = useSelector(state => state.transaction)
    
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTransactions())
    }, [dispatch])
    useEffect(() => {
        const { id, type, name, amount } = editing || {}
        if (id) {
            setName(name)
            setType(type)
            setAmount(amount)
            setEditMode(true)
        } else {
            reset()
            setEditMode(false)
        }
    }, [editing])
    const reset = () => {
        setAmount('')
        setName('')
        setType('')
    }
    const handleForm = e => {
        e.preventDefault()
        dispatch(postTransaction({
            name,
            amount: Number(amount),
            type
        }))
        reset()
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateTransaction({
            id: editing?.id,
            data: {
                name,
                amount,
                type
            }
        }))
        setEditMode(false)
        reset()
    }

    const cancelEdit = () => {
        setEditMode(false)
        reset()
    }
    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form
                onSubmit={editMode ? handleUpdate : handleForm}
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

                <button className="btn" type='submit'>
                    {
                        editMode ? 'Update Transaction' : 'Add Transaction'
                    }
                </button>
            </form>
            {
                editMode && <button
                    className="btn cancel_edit"
                    onClick={cancelEdit}
                >Cancel Edit</button>

            }

        </div>
    );
}
