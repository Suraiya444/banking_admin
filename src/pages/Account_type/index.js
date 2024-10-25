import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Account_type(){
    const[data, setData]=useState([]);
   
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async (e) => {
        let res = await axios.get(`/account_type`)
        setData(res.data.data);

    }

    const deleteData = async (id) => {
        let res = await axios.delete(`/account_type/${id}?_method=delete`)
        getDatas();
    }
    return(
        <AdminLayout>
            <div className="page-wrapper">
           
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Account Type</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
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
                                <h5 className="card-title">Account Type</h5>
                                <Link to={'/account_type/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>SL#</th>
                                                <th>Name</th>
                                                <th>Loanable Account</th>
                                                <th>Loan Amount</th>
                                                <th>Minimum Balance</th>
                                                <th>Maximum Balance</th>
                                                <th>Maximum Withdraw</th>
                                                <th>Yearly Interest</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.name}</td>
                                            <td>{d.loanable}</td>
                                            <td>{d.loan_amount}</td>
                                            <td>{d.min_balance}</td>
                                            <td>{d.max_balance}</td>
                                            <td>{d.max_transfer}</td>
                                            <td>{d.max_withdrawal}</td>
                                            <td>{d.yearly_interest}</td>
                                            <td>
                                                <Link to={`/account_type/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                <button type='button' onClick={() => deleteData (d.id)} className='btn btn-danger'>Delete</button>
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
export default Account_type; 