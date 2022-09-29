import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";

export default function Transactions() {
    const navigate = useNavigate()
    const { isLoading, error, transactions } = useSelector(state => state.transaction)
    let content
    if (isLoading) {
        content = <p>Loading....</p>
    }
    // console.log(transactions)
    if (error) {
        content = <p>{error}</p>
    }
    // transactions.reverse()
    if (transactions.length) {
        content = [...transactions].reverse().slice(0, 5).map(transaction => <Transaction
            key={transaction.id}
            transaction={transaction}
        />)
    }
    if (transactions.length === 0) {
        content = <p>There is no content</p>
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>
                    {
                        content
                    }
                </ul>
                <div className="btn-parent">
                    {transactions.slice(0, 5).length === 5 && <button
                        className="viewMore"
                        onClick={() => navigate('/allTransaction')}
                    >View More</button>}
                </div>
            </div>
        </>
    );
}
