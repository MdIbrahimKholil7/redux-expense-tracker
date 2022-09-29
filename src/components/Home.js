import React from 'react';
import Balance from './Balance';
import Form from './Form';
import Transactions from './Transactions/Transactions';

const Home = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <Balance />
                    <Form />
                    <Transactions />
                </div>
            </div>
        </>
    );
};

export default Home;