import React from 'react';
import { useSelector } from 'react-redux';
import Transactions from './Transactions/Transactions';

const AllTransaction = () => {
    const {Transactions}=useSelector(state=>state)
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
                    textAlign:'center',
                    margin:'30px'
                }}>All Transaction</h2>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllTransaction;