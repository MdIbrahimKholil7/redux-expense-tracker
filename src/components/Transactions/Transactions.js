import { useSelector } from "react-redux";
import Transaction from "./Transaction";

export default function Transactions() {

    const { isLoading, error, transactions } = useSelector(state => state.transaction)
    let content
    if (transactions.length) {
        content = transactions.map(transaction => <Transaction
            key={transaction.id}
            transaction={transaction}
        />)
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
            </div>
        </>
    );
}
