import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function LoanPayment(){
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async (e) => {
        let res = await axios.get(`/loan_payment`)
        setData(res.data.data);
    }
    const deleteData = async (id) => {
        let res = await axios.delete(`/loan_payment/${id}?_method=delete`)
        getDatas();
    }

    return(
        <AdminLayout>
            <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Loan Payment Details</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Loan payment List</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Loan Payment</li>
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
                                <h5 className="card-title">Loan Payment Details</h5>
                                <Link to={'/loan_payment/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>#SL</strong></th>
                                                 
                                                <th><strong>Customer Name</strong></th>
                                                <th><strong>Loan Id </strong></th>
                                                <th><strong>Customer Account No</strong></th>
                                                <th><strong>Payment No</strong></th>
                                                <th><strong>Balance</strong></th>
                                                <th><strong>Amount</strong></th>
                                                <th><strong>principal Amount</strong></th>
                                                <th><strong>Interest Amount</strong></th>
                                                <th><strong>Expected Date</strong></th>
                                                <th><strong>Payment Date</strong></th>
                                                <th><strong>Status</strong></th>
                                                <th><strong>Action</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.customer?.name}</td>  
                                            <td>{d.loan?.id}</td>
                                            <td>{d.customer_account?.account_no}</td>
                                            <td>{d.payment_number}</td>
                                            
                                            <td>{d.balance}</td>
                                            <td>{d.amount}</td>
                                            <td>{d.principal_amount}</td>
                                            <td>{d.interest_amount}</td>
                                            <td>{d.expected_date}</td>
                                            <td>{d.pay_date}</td>
                                            <td>{d.status}</td>
                                            <td>
                                                <Link to={`/loan_payment/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
export default LoanPayment; 