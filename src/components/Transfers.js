import React from 'react'
import transaction from '../data/transactions';

function Transfers(props){
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "   " + today.getHours() + ":" + today.getMinutes();


    return <div>
    <h2>Transfers History</h2>
    <table className="table table-bordered table-striped" style={{width: "1000px"}}>
        <thead>
            <tr>
                <th scope="col">Sender</th>
                <th scope="col">Reciever</th>
                <th scope="col">Amount</th>
                <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            {transaction.map((item) => {
                return <tr>
                <td>{item.sender}</td>
                <td>{item.reciever}</td>
                <td>{item.amount}</td>
                <td>{date}</td>
                </tr>
            })}
        </tbody>
    </table>
    </div>
}

export default Transfers;