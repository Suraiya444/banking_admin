                    import React, { useEffect, useState } from 'react';
                    import axios from '../../../components/axios';
                    import AdminLayout from '../../../layouts/AdminLayout';
                    import { useNavigate } from 'react-router-dom';
                    import {useParams} from "react-router-dom";

                    function LoanPaymentAdd() {
                        const [inputs, setInputs] = useState({id:'',customer_id:'',loan_id:'',customer_account_id:'',payment_number:'',balance:'',amount:'',principal_amount:'',interest_amount:'',status:'',expected_date:'',pay_date:''});
                        const [loan, setLoan] = useState([]);
                        const [customer, setCustomer] = useState([]);
                        const [customer_account, setCustomerAccount] = useState([]);

                        const navigate=useNavigate();
                        const {id} = useParams();
                    
                    
                        const getDatas = async (e)=>{
                            let response = await axios.get(`/loan_payment/${id}`)
                                setInputs(response.data.data);
                                
                        }

                        const getBanks = async (e)=>{
                            let response = await axios.get(`/loan`)
                            setLoan(response.data.data);
                            let res = await axios.get(`/customer`)
                            setCustomer(res.data.data);
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
                                    apiurl =`/loan_payment/${inputs.id}?_method=put`;
                                }else{
                                    apiurl=`/loan_payment`;
                                }
                                
                                let res = await axios.post(apiurl, inputs)
                                console.log(res);
                                navigate('/loan_payment')
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
                                            <h4 className="page-title">Loan Payment</h4>
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
                                                        <h4 className="card-title">Loan Payment</h4>                                   
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Loan </label>
                                                            <div className="col-sm-9">
                                                                {loan.length > 0 && 
                                                                    <select className="form-control" id="loan_id" name='loan_id' defaultValue={inputs.loan_id} onChange={handleChange}>
                                                                        <option value="">Loan </option>
                                                                        {loan.map((d, key) =>
                                                                            <option value={d.id}>{d.id}</option>
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
                                                                        <option value="">Select Customer</option>
                                                                        {customer.map((d, key) =>
                                                                            <option value={d.id}>{d.name}</option>
                                                                        )}
                                                                    </select>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Account No</label>
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
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Payment Number</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" id="payment_number" name='payment_number' defaultValue={inputs.payment_number} onChange={handleChange}/>
                                                            </div> 
                                                        </div>
                                                    
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label"> Balance</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" id="balance" name='balance' defaultValue={inputs.balance} onChange={handleChange}/>
                                                            </div>  
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Amount</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" id="amount" name='amount' defaultValue={inputs.amount} onChange={handleChange}/>
                                                            </div> 
                                                        </div>
                                                        
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Principal Amount</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" id="principal_amount" name='principal_amount' defaultValue={inputs.principal_amount} onChange={handleChange}/>
                                                            </div> 
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Interest Amount</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" id="interest_amount" name='interest_amount' defaultValue={inputs.interest_amount} onChange={handleChange}/>
                                                            </div> 
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Expected Date</label>
                                                            <div className="col-sm-9">
                                                                <input type="date" className="form-control" id="expected_date" name='expected_date' defaultValue={inputs.expected_date} onChange={handleChange}/>
                                                            </div> 
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Payment Date</label>
                                                            <div className="col-sm-9">
                                                                <input type="date" className="form-control" id="pay_date" name='pay_date' defaultValue={inputs.pay_date} onChange={handleChange}/>
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

                    export default LoanPaymentAdd;