import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function LoanAdd() {
    const [inputs, setInputs] = useState({id:'',loan_type_id:'',customer_id:'',customer_type_id:'',customer_account_id:'',start_date:'',term_length:'',interest_rate:'',principal_amount:'',amount_with_interest:'',fine:'',total_paid:''});
    const [loan_type, setLoanType] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [customer_type, setCustomerType] = useState([]);
    const [customer_account, setCustomerAccount] = useState([]);

    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/loan/${id}`)
            setInputs(response.data.data);
               
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/loan_type`)
        setLoanType(response.data.data);
        let res = await axios.get(`/customer`)
        setCustomer(res.data.data);

        let respo = await axios.get(`/customer_type`)
        setCustomerType(respo.data.data);
        let respon = await axios.get(`/customer_account`)
        setCustomerAccount(respon.data.data);
       
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
                  apiurl =`/loan/${inputs.id}?_method=put`;
            }else{
                apiurl=`/loan`;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/loan')
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
                        <h4 className="page-title">Loan</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Loan</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Loan</li>
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
                                    <h4 className="card-title">Loan Service</h4>                                   
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Loan Type</label>
                                        <div className="col-sm-9">
                                            {loan_type.length > 0 && 
                                                <select className="form-control" id="loan_type_id" name='loan_type_id' defaultValue={inputs.loan_type_id} onChange={handleChange}>
                                                    <option value="">Loan Type</option>
                                                    {loan_type.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                        <div className="col-sm-9">
                                            {customer.length > 0 && 
                                                <select className="form-control" id="customer_id" name='customer_id' defaultValue={inputs.customer_id} onChange={handleChange}>
                                                    <option value="">Select Service</option>
                                                    {customer.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Catagory</label>
                                        <div className="col-sm-9">
                                            {customer_type.length > 0 && 
                                                <select className="form-control" id="customer_type_id" name='customer_type_id' defaultValue={inputs.customer_type_id} onChange={handleChange}>
                                                    <option value="">Select Service</option>
                                                    {customer_type.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Account</label>
                                        <div className="col-sm-9">
                                            {customer_account.length > 0 && 
                                                <select className="form-control" id="customer_account_id" name='customer_account_id' defaultValue={inputs.customer_account_id} onChange={handleChange}>
                                                    <option value="">Select Service</option>
                                                    {customer_account.map((d, key) =>
                                                        <option value={d.id}>{d.account_no}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div> 
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Start Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" id="start_date" name='start_date' defaultValue={inputs.start_date} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                   
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">No Of Month</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="term_length" name='term_length' defaultValue={inputs.term_length} onChange={handleChange}/>
                                        </div>  
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Interest Rate</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="interest_rate" name='interest_rate' defaultValue={inputs.interest_rate} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Principal Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="principal_amount" name='principal_amount' defaultValue={inputs.principal_amount} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Amount With Interest</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="amount_with_interest" name='amount_with_interest' defaultValue={inputs.amount_with_interest} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Fine</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="fine" name='fine' defaultValue={inputs.fine} onChange={handleChange}/>
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Total Paid</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="total_paid" name='total_paid' defaultValue={inputs.total_paid} onChange={handleChange}/>
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

export default LoanAdd;