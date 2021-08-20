import React from 'react'
import { Link } from 'react-router-dom'
import customer from '../data/data'
import transaction from '../data/transactions';
import '../styles/Popup.css'

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Link to='/transferProcess'>
                <button className="yes-btn btn btn-secondary" onClick={() => {
                    transaction.push({
                        sender: customer[props.senderID - 1].name,
                        reciever: customer[props.receiverID - 1].name,
                        amount: props.amount
                    })
                    customer[props.receiverID - 1].balance = Number(customer[props.receiverID - 1].balance) + Number(props.amount);
                    customer[props.senderID - 1].balance -= props.amount;
                }}>Yes</button>
                </Link>
                <button className="no-btn btn btn-secondary" onClick={() => {
                    props.setTrigger(false);
                    props.setRecBack("Select Customer");
                    }}>No</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;