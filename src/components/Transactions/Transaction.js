import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { getAllTransactions, isActive, removeTransaction } from "../../Features/transaction/transactionSlice";

export default function Transaction({ transaction }) {
    const { name, amount, type,id } = transaction || {}
    const dispatch = useDispatch()
    const handleUpdate = () => {
        dispatch(isActive(transaction))
    }
    const handleDelete=(id)=>{
        dispatch(removeTransaction(id))
        dispatch(getAllTransactions())
    }
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img alt="Edit" className="icon" src={editImage}
                        onClick={handleUpdate}
                    />
                </button>
                <button className="link"
                onClick={()=>handleDelete(id)}
                >
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
