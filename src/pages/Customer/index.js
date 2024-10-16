import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Customer(){
    const[data, setData]=useState([]);
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/account_type`,config).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/account_type/${id}`,config).then(function(response){
            getDatas();
        });
    }
    return(
        <AdminLayout>
            <div className="page-wrapper">
           
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Tables</h4>
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
                                                <th>Father Name</th>
                                                <th>Mother Name</th>
                                                <th>Contact</th>
                                                <th>NID</th>
                                                <th>Permanent Address</th>
                                                <th>Present Address</th>
                                                <th>Date Of Birth</th>
                                                <th>Gender</th>
                                                <th>Education</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.name}</td>
                                            <td>{d.loanable}</td>
                                            <td>{d.loan_amount}</td>
                                            <td>{d.min_balance}</td>
                                            <td>{d.max_balance}</td>
                                            <td>{d.max_withdrawal}</td>
                                            <td>{d.yearly_interest}</td>
                                            <td>
                                                <Link to={`/account_type/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )} */}
                                     <tr>
                                                <th>1</th>
                                                <th>Kamal</th>
                                                <th>jamal</th>
                                                <th>rina</th>
                                                <th>5656756</th>
                                                <th>6475756556</th>
                                                <th>2no Gate</th>
                                                <th>2no Gate</th>
                                                <th>Male</th>
                                                <th>Hsc</th>
                                                <th>Action</th>
                                            </tr>
                                            <tr>
                                            <th>1</th>
                                                <th>suraiya</th>
                                                <th>jamal</th>
                                                <th>rina</th>
                                                <th>5656756</th>
                                                <th>6475756556</th>
                                                <th>2no Gate</th>
                                                <th>2no Gate</th>
                                                <th>FeMale</th>
                                                <th>Hsc</th>
                                                <th>Action</th>
                                            </tr>
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
export default Customer; 