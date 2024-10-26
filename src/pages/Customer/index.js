import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';


function Customer(){
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async (e) => {
        let res = await axios.get(`/customer`)
        setData(res.data.data);
    }

     const deleteData = async (id) => {
        let res = await axios.delete(`/customer/${id}?_method=delete`)
        getDatas();
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
                                <h5 className="card-title">Bank</h5>
                                <Link to={'/customer/add'} className='btn btn-primary float-right' >Add New</Link>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>#SL</strong></th>
                                                <th><strong>Bank</strong></th>
                                                <th><strong>Branch</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>Father's Name</strong></th>
                                                <th><strong>Mother Name</strong></th>
                                                <th><strong>Contact</strong></th>
                                                <th><strong>Nid</strong></th> 
                                                <th><strong>Nid Photo</strong></th>
                                                <th><strong>Nid Photo Back</strong></th>
                                                <th><strong>Permanent Address</strong></th>
                                                <th><strong>Present Address</strong></th>
                                                <th><strong>Date Of Birth</strong></th>
                                                <th><strong> Gender</strong></th>
                                                <th><strong>Reference</strong></th>
                                                <th><strong>Income</strong></th>
                                                <th><strong>Profession</strong></th>
                                                <th><strong>Balance</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && Array.isArray(data) && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{key+1}</td>
                                            <td>{d.bank?.name}</td>
                                            <td>{d.bank_branch?.name}</td>
                                            <td>{d.name}</td>
                                            <td>{d.father_name}</td>
                                            <td>{d.mother_name}</td>
                                            <td>{d.contact_no}</td>
                                            <td>{d.nid}</td>
                                            <td>{
                                                    d.image?.split(',').map((src, i) => (
                                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/customer/${src}`} alt="customer" style={{ width:"50px", height:'50px', padding:'0px' }}/>
                                                    ))
                                                }</td>
                                            <td>{
                                                    d.nid_image?.split(',').map((src, i) => (
                                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/customer/${src}`} alt="customer" style={{ width:"50px", height:'50px', padding:'0px' }}/>
                                                    ))
                                                }</td>
                                            <td>{
                                                    d.nid_image_back?.split(',').map((src, i) => (
                                                        <img src={`${process.env.REACT_APP_BACKEND_URL}/customer/${src}`} alt="customer" style={{ width:"50px", height:'50px', padding:'0px' }}/>
                                                    ))
                                                }</td>
                                            <td>{d.email}</td>
                                            <td>{d.per_address}</td>
                                            <td>{d.pre_address}</td>
                                            <td>{d.dob}</td>
                                            <td>{d.gender}</td>
                                            <td>{d.ref_id}</td>
                                            <td>{d.income}</td>
                                            <td>{d.occupation}</td>
                                            <td>{d.balance}</td>
                                            <td>
                                                <Link to={`/customer/edit/${d.id}`} className='btn btn-info'>Edit</Link>
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