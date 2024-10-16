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
        axios.get(`${process.env.REACT_APP_API_URL}/customer`,config).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/customer/${id}`,config).then(function(response){
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
                                <h5 className="card-title">Customer List</h5>
                                <Link to={'/customer/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                        <tr>
                                                <th><strong>#SL</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>Fathers Name</strong></th>
                                                <th><strong>Mother's Name</strong></th>
                                                <th><strong>Contact</strong></th>
                                                <th><strong>NID</strong></th> 
                                                <th><strong>Permanent Address</strong></th>
                                                <th><strong>present Address</strong></th>
                                                <th><strong>Gender</strong></th>
                                                <th><strong>Reference</strong></th>
                                                <th><strong>Education</strong></th>
                                                <th><strong>Balance</strong></th>
                                                <th><strong>Action</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>{Array.isArray(data) && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.bank?.bank_id}</td>
                                            <td>{d.bank_branch?.bank_branch_id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.father_name}</td>
                                            <td>{d.mother_name}</td>
                                            <td>{d.contact_no}</td>
                                            <td>{d.nid}</td>
                                            <td>{d.email}</td>
                                            <td>{d.per_address}</td>
                                            <td>{d.pre_address}</td>
                                            <td>{d.dob}</td>
                                            <td>{d.gender}</td>
                                            <td>{d.ref_id}</td>
                                            <td>{d.education}</td>
                                            <td>{d.balance}</td>
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
export default Customer; 