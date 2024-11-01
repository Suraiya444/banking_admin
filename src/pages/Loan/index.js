import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Loan(){
    const[data, setData]=useState([]);
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas (){
        axios.get(`${process.env.REACT_APP_API_URL}/loan`,config).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData =(id) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/loan/${id}`,config).then(function(response) {
            setData(response.data.data);
        });
    }

    return(
        <AdminLayout>
            <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Active Customer Loan List</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Loan List</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Loan</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Customer Loan</h5>
                                <Link to={'/loan/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>#SL</strong></th>
                                                <th><strong>Loan Type</strong></th>
                                                <th><strong>Customer Name</strong></th>
                                                <th><strong>Customer Account No </strong></th>
                                                <th><strong>Account Type</strong></th>
                                                <th><strong>Start Date</strong></th>
                                                <th><strong>No Of Month</strong></th>
                                                <th><strong>Interest Rate</strong></th>
                                                <th><strong>Principal Amount</strong></th>
                                                <th><strong>Amount With Interest</strong></th>
                                                <th><strong>Fine</strong></th>
                                                <th><strong>Total Paid</strong></th>
                                                <th><strong>Action</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.loan_type?.name}</td>  
                                            <td>{d.customer?.name}</td>
                                            <td>{d.customer_account?.account_no}</td>
                                            <td>{d.customer_type?.name}</td>
                                            
                                            <td>{d.start_date}</td>
                                            <td>{d.term_length}</td>
                                            <td>{d.interest_rate}</td>
                                            <td>{d.principal_amount}</td>
                                            <td>{d.amount_with_interest}</td>
                                            <td>{d.fine}</td>
                                            <td>{d.total_paid}</td>
                                            <td>
                                                <Link to={`/loan/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                        </tbody>
                                        
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
           
        </div>
        </AdminLayout>
    )
}
export default Loan; 