import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function BanificiaryAdd() {
    const [inputs, setInputs] = useState ({id:'',name:'',account_type_id:'',account_no:'',status:'',active_date:''});
    const [account_type, setAccountType] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();


    const getDatas = async (e)=>{
        let response = await axios.get(`/beneficiary/${id}`)
            setInputs(response.data.data);
       
    }
    const getBanks = async (e)=>{
        let response = await axios.get(`/account_type`)
        setAccountType(response.data.data);
         
       
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
                  apiurl =`/beneficiary/${inputs.id}?_method=put`;
            }else{
                apiurl=`/beneficiary `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/beneficiary')
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
                        <h4 className="page-title">Banifciary Add</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/beneficiary'} className='btn btn-primary float-right' >Beneficiary List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Banifciary</li>
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
                            <form  className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <h4 className="card-title">Banificiary Info</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Banifciary Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Type</label>
                                        <div className="col-sm-9">
                                        {account_type.length > 0 && 
                                                <select className="form-control" id="account_type_id" name='account_type_id' defaultValue={inputs.account_type_id} onChange={handleChange}>
                                                    <option value="">Select accouny Type</option>
                                                    {account_type.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="account_no" name='account_no' defaultValue={inputs.account_no} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="status" name='status' defaultValue={inputs.status} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Start Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" id="status" name='active_date' defaultValue={inputs.active_date} onChange={handleChange}/>
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

export default BanificiaryAdd