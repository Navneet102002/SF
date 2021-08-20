import React from 'react'
import {Link} from 'react-router-dom'

function TransferProcess(){
    return <div>
    <h1>Transaction Successful</h1>
    <Link to='/transfers'><button type="button" className='btn btn-success center' style={{width: "200px", display: "block"}}>Go to Transfers History</button></Link>
    </div>
}

export default TransferProcess;