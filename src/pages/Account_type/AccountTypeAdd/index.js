import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Account_typeAdd() {
    const [inputs, setInputs] = useState({id:'',name:'',loanable:'',loan_amount:'',min_balance:'',max_balance:'',max_withdrawal:'',yearly_interest:''});
    const navigate=useNavigate();
    const {id} = useParams();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/bank/${id}`,config).then(function(response) {
            setInputs(response.data.data);
        });
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
        //console.log(inputs)
        
        try{
            let apiurl='REACT_APP_API_URL';
            let mtd='';
            if(inputs.id!=''){
                mtd='put';
                apiurl=`/account_type/${inputs.id}`;
            }else{
                mtd='post';
                apiurl=`/account_type`;
            }
            
            let response= await axios({
                method: mtd,
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs,
                headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
            });
            navigate('/account_type')
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
                        <h4 className="page-title">Bank</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                            <form  className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <h4 className="card-title">account Type</h4>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Acount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Loanable Ammount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="loanable" name='loanable' defaultValue={inputs.loanable} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Loan Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="loan_amount" name='loan_amount' defaultValue={inputs.loan_amount} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Maximum balance</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_balance" name='max_balance' defaultValue={inputs.max_balance} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Maximum withdraw</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="max_withdrawal" name='max_withdrawal' defaultValue={inputs.max_withdrawal} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Yearly Interest</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="yearly_interest" name='yearly_interest' defaultValue={inputs.yearly_interest} onChange={handleChange}/>
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

export default Account_typeAdd