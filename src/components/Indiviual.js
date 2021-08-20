import React, { useState } from 'react';
import Popup from './Popup'
import {useLocation} from 'react-router-dom'
import customer from '../data/data'
import '../styles/styles.css';

 
function Indiviual(){
    const location = useLocation();
    const [amount, setAmount] = useState(null);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [reciever, setReciever] = useState("Select Customer");
    const [cust, setCust] = useState("");
    const [custID, setCustID] = useState(0);

    function handleChange(event){
        var val = event.target.value;
        setAmount(val);
    }

    function handlePopup(val1, val2){
        setCust(val1);
        setCustID(val2);
        setReciever(val1);
    }

    function noTansfer(){
        if(amount <= 0 || amount === null){
            return alert("!!! Enter an amount to transfer !!!");
        }else if(reciever === "Select Customer"){
            return alert("!!! Select a customer to transfer money !!!");
        }else if(amount > location.state.Balance){
            return alert("!!! Insufficient Balance !!!");
        }else{
            return alert("!!! Enter transfer details !!!");
        }
    }
    
    return <div>
    <h2>Customer Details</h2>
    <div className="center custDetails">
        <p>Name: {location.state.Name}</p>
        <p>Email: {location.state.Email}</p>
        <p>Balance: {location.state.Balance}</p>
    </div>
    <form className="center">
        <label for="amount">Amount: <input onChange={handleChange} style={{width: "200px"}} id="amount" type="number" name="amount" placeholder="Enter amount"/></label>
    </form>
    <div class="dropdown center">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {reciever}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {customer.map((item) => {
            return (
                item.id !== location.state.Id ? <li onClick={() => handlePopup(item.name, item.id)}>{item.name}</li> : null);
        })}
        </ul>
    </div>
    <button className="center" onClick={() => {
        return (
            (amount <= location.state.Balance && amount > 0 && amount !== null && reciever !== "Select Customer") ? setButtonPopup(true) : noTansfer()
        )
        }}>Transfer</button>
    <Popup 
        trigger={buttonPopup} 
        setTrigger={setButtonPopup} 
        setRecBack={setReciever} 
        senderID={location.state.Id} 
        receiverID={custID} 
        amount={amount}>
        <h3>Are you sure you want to transfer {amount} to {cust}?</h3>
    </Popup>
    </div>
}

export default Indiviual;