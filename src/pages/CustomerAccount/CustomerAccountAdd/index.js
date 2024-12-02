import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function CustomerAccountAdd() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',account_type_id:'',account_no:'',account_open_date:'',account_close_date:'',status:''});
    const [customer, setCustomer] = useState([]);
    const [account_type, setAccount] = useState([]);
   
    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/customer_account/${id}`)
            setInputs(response.data.data);
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/customer`)
        setCustomer(response.data.data);
        let res = await axios.get(`/account_type`)
        setAccount(res.data.data);
    }
    // const getDetails=async(e)=>{
    //     let acc=account_type.find(e=>e.id==e.target.value)
    //     console.log()
    // }

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
                  apiurl =`/customer_account/${inputs.id}?_method=put`;
            }else{
                apiurl=`/customer_account `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/customer_account')
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
                        <h4 className="page-title">Customer Account Opening</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/customer_account'} className='btn btn-primary float-right' > Customer Account   List</Link></li>
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
                                    <h4 className="card-title">Account Opening</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                        <div className="col-sm-9">
                                            {customer.length > 0 && 
                                                <select className="form-control" id="customer_id" name='customer_id' defaultValue={inputs.customer_id} onChange={e => { handleChange(e)}}>
                                                    <option value="">Select Customer</option>
                                                    {customer.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Type</label>
                                        <div className="col-sm-9">
                                            {account_type.length > 0 && 
                                                <select className="form-control" id="account_type_id" name='account_type_id' defaultValue={inputs.account_type_id} onChange={e => { handleChange(e)}}>
                                                    <option value="">Select Account Type</option>
                                                    {account_type.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account No</label>
                                        <div className="col-sm-9">
                                            <input type="text" readOnly className="form-control" id="account_no" name='account_no' defaultValue={inputs.account_no} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    {/* <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Initial Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="initial_amount" name='initial_amount' defaultValue={inputs.initial_amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Maximum Balance</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_balance" name='max_balance' defaultValue={inputs.max_balance} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Maximum Transfer</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_transfer" name='max_transfer' defaultValue={inputs.max_transfer} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Maximum Withdrawal</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_withdrawal" name='max_withdrawal' defaultValue={inputs.max_withdrawal} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Yearly Interest</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="yearly_interest" name='yearly_interest' defaultValue={inputs.yearly_interest} onChange={handleChange}/>
                                        </div>
                                    </div> */}
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Opening Date</label>
                                        <div className="col-sm-9">
                                            {inputs.id!='' ? 
                                                <input type="date" readOnly className="form-control" id="account_open_date" name='account_open_date' defaultValue={inputs.account_open_date} onChange={handleChange}/>
                                                :
                                                <input type="date" className="form-control" id="account_open_date" name='account_open_date' defaultValue={inputs.account_open_date} onChange={handleChange}/>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Account Closing Date</label>
                                        <div className="col-sm-9">
                                            {inputs.id=='' ? 
                                                <input type="date" readOnly className="form-control" id="account_close_date" name='account_close_date' defaultValue={inputs.account_close_date} onChange={handleChange}/>
                                                :
                                                <input type="date" className="form-control" id="account_close_date" name='account_close_date' defaultValue={inputs.account_close_date} onChange={handleChange}/>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <select className="form-control" id="status" name='status' defaultValue={inputs.status} onChange={handleChange}>
                                                <option value="0">Inactive</option>
                                                <option value="1">Active</option>
                                            </select>
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

export default CustomerAccountAdd;