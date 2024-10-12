import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
function BankBranch(){
    const[data, setData]=useState([]);
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/bank_branch`,config).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/bank_branch/${id}`,config).then(function(response){
            getDatas();
        });
    }
    return(
        <AdminLayout>
            <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Bank Branch List</h4>
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
                                <Link to={'/bank_branch/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#SL</th>
                                                <th>Bank</th>
                                                <th>Branch</th>
                                                <th>Phone No</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.bank?.name}</td>
                                            <td>{d.name}</td>
                                            <td>{d.contact_no}</td>
                                            <td>{d.email}</td>
                                            <td>{d.address}</td>
                                            <td>
                                                <Link to={`/bank_branch/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                        </tbody>
                                        <tfoot>
                                            <th>#SL</th>
                                            <th>Bank</th>
                                            <th>Branch</th>
                                            <th>Phone No</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tfoot>
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
export default BankBranch; 