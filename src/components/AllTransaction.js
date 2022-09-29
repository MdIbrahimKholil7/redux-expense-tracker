import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransaction } from '../Features/transaction/transactionSlice';
import Transaction from './Transactions/Transaction';
import Transactions from './Transactions/Transactions';

const AllTransaction = () => {
    const { transactions } = useSelector(state => state.transaction)
    console.log(transactions)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTransaction())
    }, [])
    // console.log(Transaction)
    return (
        <div className='parent-transaction'>
            <div className='search-box'>
                <div className="parent-radio">
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="income"
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="expense"
                            placeholder="Expense"
                        />
                        <label>Expense</label>
                    </div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Search by name'

                    />
                </div>
            </div>
            <div>
                <h2 style={{
                    textAlign: 'center',
                    margin: '70px'
                }}>All Transaction</h2>
                <div
                    style={{
                        width: '500px',
                        margin: 'auto'
                    }}
                >
                    <div
                     style={{
                        
                        marginBottom: '60px'
                    }}
                    >
                        {
                            transactions.map(transaction => <Transaction
                                key={transaction.id}
                                transaction={transaction}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTransaction;