import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function BankserviceAdd() {
    const [inputs, setInputs] = useState({id:'',name:'',amount:'',contact_no:''});
    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/bank_service/${id}`)
            setInputs(response.data.data);
               
    }


    useEffect(() => {
        if(id){
            getDatas();
        }
        
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
                  apiurl =`/bank_service/${inputs.id}?_method=put`;
            }else{
                apiurl=`/bank_service `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/bank_service')
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
                        <h4 className="page-title">Bank Service</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/bank_branch'} className='btn btn-primary float-right' >Bank Service List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Bank Service</li>
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
                                    <h4 className="card-title">Bank Service</h4>                                   
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Service Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Service Charge</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="amount" id="amount" name='amount' defaultValue={inputs.amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Contact Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="contact_no" id="contact_no" name='contact_no' defaultValue={inputs.contact_no} onChange={handleChange}/>
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

export default BankserviceAdd;