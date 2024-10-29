import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function CustomerAccount(){
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async (e) => {
        let res = await axios.get(`/customer_account`)
        setData(res.data.data);
    }
    const deleteData = async (id) => {
        let res = await axios.delete(`/customer_account/${id}?_method=delete`)
        getDatas();
    }

    return(
        <AdminLayout>
            <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Customer Account List</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">List</li>
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
                                <h5 className="card-title">Bank</h5>
                                <Link to={'/customer_account/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>#SL</strong></th>
                                                <th><strong>Customer Name</strong></th>
                                                <th><strong>Account Type</strong></th>
                                                <th><strong>Initial Amount</strong></th>
                                                <th><strong>Max Balance</strong></th>
                                                <th><strong>Max transfer</strong></th>
                                                <th><strong>max Withdraw</strong></th>
                                                <th><strong>Yearly Interest</strong></th> 
                                                <th><strong>Opening Date</strong></th> 
                                                <th><strong>Closing Date</strong></th> 
                                                <th><strong>Status</strong></th> 
                                                <th><strong>Action</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.customer?.name}</td>
                                            <td>{d.account_type?.name}</td>
                                            <td>{d.initial_amount}</td>
                                            <td>{d.max_balance}</td>
                                            <td>{d.max_transfer}</td>
                                            <td>{d.max_withdrawal}</td>
                                            <td>{d.yearly_interest}</td>
                                            <td>{d.account_open_date}</td>
                                            <td>{d.account_close_date}</td>
                                            <td>{d.status}</td>
                                            <td>
                                                <Link to={`/bank_branch/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
export default CustomerAccount; 