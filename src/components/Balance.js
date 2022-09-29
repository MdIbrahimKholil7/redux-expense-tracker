import { useSelector } from "react-redux";

export default function Balance() {

    const {transaction}=useSelector(state=>state)
    const calculateIncome=(transaction)=>{
        let income=0
        transaction?.transactions?.forEach(elem=>{
            console.log(elem)
            if(elem.type==='income'){
                income+=+elem.amount
            }else{
                income-=+elem.amount
            }
        })
        console.log(income)
        return income
    }

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{calculateIncome(transaction)}</span>
            </h3>
        </div>
    );
}
