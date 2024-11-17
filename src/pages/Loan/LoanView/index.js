import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

function LoanView(){
    const[data, setData]=useState([]);
    const {id} = useParams();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas (){
        axios.get(`${process.env.REACT_APP_API_URL}/loan/${id}`,config).then(function(response) {
            setData(response.data.data);
            console.log(response.data)
        });
        axios.get(`${process.env.REACT_APP_API_URL}/loan_payme/${id}`,config).then(function(response) {
            setData(response.data.data);
            console.log(response.data)
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
                                <div className='row'>
                                    <div className='col-md-12'><Link to={'/loan'} className='btn btn-primary float-right' >Back to Loan</Link></div>
                                    <div className='col-md-6'>
                                        <table id="zero_config" className="table table-striped table-bordered">
                                            <tr>
                                                <th><strong>Customer Name</strong></th>
                                                <th>{data.customer?.name}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Customer Account No </strong></th>
                                                <th>{data.customer_account?.account_no}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Account Type</strong></th>
                                                <th>{data.customer_type?.name}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Start Date</strong></th>
                                                <th>{data.start_date}</th>
                                                
                                            </tr>
                                            <tr>
                                                <th><strong>No Of Year</strong></th>
                                                <th>{data.term_length}</th>
                                                 
                                            </tr>
                                            
                                        </table>
                                    </div>
                                    <div className='col-md-6'>
                                        <table id="zero_config" className="table table-striped table-bordered">
                                            <tr>
                                                <th><strong>Interest Rate</strong></th>
                                                <th>{data.interest_rate}</th>
                                                
                                                
                                            </tr>
                                            <tr>
                                                <th><strong>Principal Amount</strong></th>
                                                <th>{data.principal_amount}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Amount With Interest</strong></th>
                                                <th>{data.amount_with_interest}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Fine</strong></th>
                                                <th>{data.fine}</th>
                                            </tr>
                                            <tr>
                                                <th><strong>Total Paid</strong></th>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>Payment Number</strong></th>
                                                <th><strong>Balance</strong></th>
                                                <th><strong>Payment</strong></th>
                                                <th><strong>Principal</strong></th>
                                                <th><strong>Interest</strong></th>
                                                <th><strong>Due Date</strong></th>
                                                <th><strong>Pay Date</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.loan_details && data.loan_details.map((d, key) =>
                                        <tr key={d.id}>
                                            <td>{d.payment_no}</td>  
                                            <td>{d.loan_balance}</td>
                                            <td>{d.payment}</td>
                                            <td>{d.pricipal}</td>
                                            
                                            <td>{d.interest}</td>
                                            <td>{d.pay_date}</td>
                                            <td>{d.actual_date}</td>
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
export default LoanView; 