import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CustomerserviceAdd() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',bank_service_id:'',status:'',active_date:''});
    const [customer, setCustomer] = useState([]);
    const [bank_service, setBankService] = useState([]);

    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/customer_service/${id}`)
            setInputs(response.data.data);
               
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/customer`)
        setCustomer(response.data.data);
        let res = await axios.get(`/bank_service`)
        setBankService(res.data.data);
       
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
                  apiurl =`/customer_service/${inputs.id}?_method=put`;
            }else{
                apiurl=`/customer_service`;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/customer_service')
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
                        <h4 className="page-title">Customer Service</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Customer Service</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Customer Service</li>
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
                                    <h4 className="card-title">Customer Service</h4>                                   
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                        <div className="col-sm-9">
                                            {customer.length > 0 && 
                                                <select className="form-control" id="name" name='bank_id' defaultValue={inputs.bank_id} onChange={handleChange}>
                                                    <option value="">Select Customer</option>
                                                    {customer.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Service Name</label>
                                        <div className="col-sm-9">
                                            {bank_service.length > 0 && 
                                                <select className="form-control" id="name" name='bank_id' defaultValue={inputs.bank_id} onChange={handleChange}>
                                                    <option value="">Select Service</option>
                                                    {bank_service.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="status" name='status' defaultValue={inputs.status} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Active Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" id="active_date" name='active_date' defaultValue={inputs.active_date} onChange={handleChange}/>
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

export default CustomerserviceAdd;