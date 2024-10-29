import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CustomerTypeAdd() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',customer_account_id:'',account_type_id:'',name:''});
    const [customer, setCustomer] = useState([]);
    const [account_type, setAccount] = useState([]);
    const [customer_account, setCustomerAccount] = useState([]);
   
    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/customer_type/${id}`)
            setInputs(response.data.data);
           
       
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/customer`)
        setCustomer(response.data.data);
        let res = await axios.get(`/account_type`)
        setAccount(res.data.data);
        let respo = await axios.get(`/customer_account`)
        setCustomerAccount(respo.data.data);
       
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
                  apiurl =`/customer_type/${inputs.id}?_method=put`;
            }else{
                apiurl=`/customer_type `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/customer_type')
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
                        <h4 className="page-title">Customer  Type</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Customer Type</a></li>
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
                                    <h4 className="card-title">Type Of Customer</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                        <div className="col-sm-9">
                                            {customer.length > 0 && 
                                                <select className="form-control" id="customer_id" name='customer_id' defaultValue={inputs.customer_id} onChange={handleChange}>
                                                    <option value="">Select Customer</option>
                                                    {customer.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account No</label>
                                        <div className="col-sm-9">
                                            {customer_account.length > 0 && 
                                                <select className="form-control" id="customer_account_id" name='customer_account_id' defaultValue={inputs.customer_account_id} onChange={handleChange}>
                                                    <option value="">Select Account No</option>
                                                    {customer_account.map((d, key) =>
                                                        <option value={d.id}>{d.account_no}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Type</label>
                                        <div className="col-sm-9">
                                            {account_type.length > 0 && 
                                                <select className="form-control" id="account_type_id" name='account_type_id' defaultValue={inputs.account_type_id} onChange={handleChange}>
                                                    <option value="">Select Account No</option>
                                                    {account_type.map((d, key) =>
                                                        <option value={d.id}>{d.account_no}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Type</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                     
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="status" name='status' defaultValue={inputs.status} onChange={handleChange}/>
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

export default CustomerTypeAdd;