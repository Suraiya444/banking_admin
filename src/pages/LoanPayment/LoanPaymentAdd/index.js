import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function LoanPaymentAdd() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',loan_id:'',customer_account_id:'',payment_number:'',balance:'',principal_amount:'',interest_rate:'',payment_term:'',amount:'',expected_date:'',pay_date:'',status:''});
    const [customer, setCustomer] = useState([]);
    const [loan, setLoan] = useState([]);
    const [loan_type, setLoanType] = useState([]);
    const [customer_account, setAccount] = useState([]);
   
    const navigate=useNavigate();
    const {id} = useParams();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
  
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/loan_payment/${id}`,config).then(function(response) {
            setInputs(response.data.data);
        });
    }

    function getLoanType(e){
          axios.get(`${process.env.REACT_APP_API_URL}/loan?customer_id=${e.target.value}`,config).then(function(response) {
              setLoanType(response.data.data);
          });
        axios.get(`${process.env.REACT_APP_API_URL}/customer_account?customer_id=${e.target.value}`,config).then(function(response) {
            setAccount(response.data.data);
        });

         
    }
    

    function getBanks(){

        axios.get(`${process.env.REACT_APP_API_URL}/customer`,config).then(function(response) {
            setCustomer(response.data.data);
        });

        axios.get(`${process.env.REACT_APP_API_URL}/loan`,config).then(function(response) {
            setLoan(response.data.data);
        });
 
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
        // console.log(inputs)
        
        try{
            let apiurl='';
            let mtd='';
            if(inputs.id!=''){
                mtd='put';
                apiurl=`/loan_payment/${inputs.id}`;
            }else{
                mtd='post';
                apiurl=`/loan_payment`;
            }
            
            let response= await axios({
                method: mtd,
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs,
                headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
            });
            navigate('/loan_payment')
        } 
        catch(e){
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
                                    <li className="breadcrumb-item"><Link to={'/loan_payment'} className='btn btn-primary float-right' >Loan Payment   List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Loan Payment</li>
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
                                    <h4 className="card-title"> Loan Payment </h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                        <div className="col-sm-9">
                                            {customer.length > 0 && 
                                                <select className="form-control" id="customer_id" name='customer_id' defaultValue={inputs.customer_id}  onChange={e => { handleChange(e); getLoanType(e)}} >
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
                                                    <option value="">Custmer Account</option>
                                                    {customer_account.map((d, key) =>
                                                        <option value={d.id}>{d.account_no }</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Loan Type</label>
                                        <div className="col-sm-9">
                                            {loan.length > 0 && 
                                                <select className="form-control" id="loan_id" name='loan_id' defaultValue={inputs.loan_type_id}  onChange={e => { handleChange(e); getLoanType(e)}} >
                                                    <option value="">Select loan</option>
                                                    {loan.map((d, key) =>
                                                        <option value={d.id}>{d.loan_type?.name}</option>
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
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Balance</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="balance" name='balance' defaultValue={inputs.balance} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Principal Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="principal_amount" name='principal_amount' defaultValue={inputs.principal_amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Interest Rate</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="interest_rate" name='interest_rate' defaultValue={inputs.interest_rate} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Payment Term</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="amount" name='amount' defaultValue={inputs.amount} onChange={handleChange}/>
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
                                            <select className="form-control" id="status" name='status' defaultValue={inputs.status} onChange={handleChange}>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
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

export default LoanPaymentAdd;