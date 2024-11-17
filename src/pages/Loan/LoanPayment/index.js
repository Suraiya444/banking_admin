import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
// import axios from '../../components/axios';
// import AdminLayout from '../../../layouts/AdminLayout';
import AdminLayout from '../../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";

function LoanPayment(){
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
                                <h5 className="card-title">Customer Loan Payment</h5>
                                
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
                                                <th><strong>Amount</strong></th>
                                                <th><strong>Action</strong></th>
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
                                            <td>{d.amount}</td>
                                            <td>{d.actual_date}</td>
                                            <button type='button'className='btn btn-danger'>Pay</button>
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
export default LoanPayment; 