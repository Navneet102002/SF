import React from 'react';
import {Link} from 'react-router-dom'
import customer from '../data/data'

function Customers(){
    return <div>
    <h2>Customers Details</h2>
    <div>
    <table className="table table-bordered table-striped" style={{width: "750px"}}>
    <thead className="thead-dark">
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Balance</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {customer.map((item) => {
          return <tr>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.balance}</td>
            <td>
            <Link to={{
              pathname: "/indiviual", 
              state: {
                Name: item.name,
                Email: item.email,
                Balance: item.balance,
                Id: item.id
              }}}><button type="button" className="btn btn-info" style={{color: "#fff"}}>View Customer</button></Link>
            </td>
        </tr>})}
    </tbody>
    </table>
    </div>
    </div>
}

export default Customers;