import { useSelector } from "react-redux";
import Transaction from "./Transaction";

export default function Transactions() {

    const { isLoading, error, transactions } = useSelector(state => state.transaction)
    let content
    if(isLoading){
        content=<p>Loading....</p>
    }
    if(error){
        content=<p>{error}</p>
    }
    if (transactions.length) {
        content = transactions.map(transaction => <Transaction
            key={transaction.id}
            transaction={transaction}
        />)
    }
    if(transactions.length===0){
        content=<p>There is no content</p>
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
