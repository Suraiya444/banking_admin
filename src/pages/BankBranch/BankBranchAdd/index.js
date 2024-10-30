import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function BankBranchAdd() {
    const [inputs, setInputs] = useState({id:'',bank_id:'',district_id:'',name:'',routing:'',contact_no:'',email:'',address:''});
    const [bank, setBank] = useState([]);
    const [district, setDistrict] = useState([]);
   
    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/bank_branch/${id}`)
            setInputs(response.data.data);
           
       
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/bank`)
        setBank(response.data.data);
        let res = await axios.get(`/district`)
        setDistrict(res.data.data);
       
    }
    

    useEffect(() => {
        if(id){
            getDatas();
        }
        getBanks();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
          
        try{
            let apiurl='';
            if(inputs.id!=''){
                  apiurl =`/bank_branch/${inputs.id}?_method=put`;
            }else{
                apiurl=`/bank_branch `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/bank_branch')
        }
        catch (e) {
            console.log(e);
        }
    }
    
  return (
    <AdminLayout>
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Bank Branch</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/bank_branch'} className='btn btn-primary float-right' >Bank Branch List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Bank</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <h4 className="card-title">Bank Branch</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Name</label>
                                        <div className="col-sm-9">
                                            {bank.length > 0 && 
                                                <select className="form-control" id="name" name='bank_id' defaultValue={inputs.bank_id} onChange={handleChange}>
                                                    <option value="">Select Branch</option>
                                                    {bank.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">District</label>
                                        <div className="col-sm-9">
                                            {bank.length > 0 && 
                                                <select className="form-control" id="district_id" name='district_id' defaultValue={inputs.district_id} onChange={handleChange}>
                                                    <option value="">Select District</option>
                                                    {district.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Branch Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Contact Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="contact_no" name='contact_no' defaultValue={inputs.contact_no} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Routing Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="routing" name='routing' defaultValue={inputs.routing} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Email Address</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="email" name='email' defaultValue={inputs.email} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Address</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="address" name='address' defaultValue={inputs.address} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
    
  )
}

export default BankBranchAdd;