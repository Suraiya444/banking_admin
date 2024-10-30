import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function TransferAdd() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',customer_account_id:'',beneficiary_id:'',transfer_date:'',amount:'',status:'',address:''});
    const [customer, setCustomer] = useState([]);
    const [customer_account, setCustomerAccount] = useState([]);
    const [beneficiary, setBeneficiary] = useState([]);
   
    const navigate=useNavigate();
    const {id} = useParams();
  
  
    const getDatas = async (e)=>{
        let response = await axios.get(`/transfer/${id}`)
            setInputs(response.data.data);
           
       
    }

    const getBanks = async (e)=>{
        let response = await axios.get(`/customer`)
        setCustomer(response.data.data);
        let res = await axios.get(`/customer_account`)
        setCustomerAccount(res.data.data);
        let respo = await axios.get(`/beneficiary`)
        setBeneficiary(respo.data.data);
        
       
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
                  apiurl =`/transfer/${inputs.id}?_method=put`;
            }else{
                apiurl=`/transfer `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/transfer')
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
                        <h4 className="page-title">Fund Transfer</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/transfer'} className='btn btn-primary float-right' >Fund Transfer List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Fund Transfer</li>
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
                                    <h4 className="card-title">Transfer</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label"> Customer Name</label>
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
                                                    <option value="">Account No</option>
                                                    {customer_account.map((d, key) =>
                                                        <option value={d.id}>{d.account_no}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Beneficiary</label>
                                        <div className="col-sm-9">
                                            {beneficiary.length > 0 && 
                                                <select className="form-control" id="beneficiary_id" name='beneficiary_id' defaultValue={inputs.beneficiary_id} onChange={handleChange}>
                                                    <option value="">Select Beneficiary</option>
                                                    {beneficiary.map((d, key) =>
                                                        <option value={d.id}>{d.name}{d.account_no}</option>
                                                    )} 
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Transfer Date</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" id="transfer_date" name='transfer_date' defaultValue={inputs.transfer_date} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Tranfer Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="amount" name='amount' defaultValue={inputs.amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label"> Status</label>
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

export default TransferAdd;