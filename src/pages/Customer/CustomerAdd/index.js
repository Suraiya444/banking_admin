import React,  { useEffect, useState } from 'react'
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function CustomerAdd() {
    const [inputs, setInputs] = useState({id:'',name:'',father_name:'',mother_name:'',contact_no:'',nid:'',image:'',nid_image:'',nid_image_back:'',email:'',per_address:'',pre_address:'',dob:'',gender:'',ref_id:'',income:'',occupation:'',balance:''});

    
    const [selectedfile, setSelectedFile] = useState([]);//for image 

    const navigate=useNavigate();
    const {id} = useParams();

     
    const getDatas = async (e) => {
        let response = await axios.get(`/customer/${id}`);
        setInputs(response.data.data);
    }

    // const getBanks = async (e)=>{
    //     let response = await axios.get(`/bank`)
    //     setBank(response.data.data);
    //     let res = await axios.get(`/bank_branch`)
    //     setBankBranch(res.data.data);
       
    // }
     
    useEffect(() => {
        if(id){
            getDatas();
        }
        // getBanks();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

     //for image 
     const handelFile = (e) => {
        setSelectedFile(e.target.files)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        //  console.log(inputs)
        const formData = new FormData();

        for (let i = 0; i < selectedfile.length; i++) {
            formData.append('files[]', selectedfile[i])
        }

        for (const property in inputs) {
            formData.append(property, inputs[property])
        }
          
        try{
            let apiurl='';
            if(inputs.id!=''){
                  apiurl =`/customer/${inputs.id}?_method=put`;
            }else{
                apiurl=`/customer `;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/customer')
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
                        <h4 className="page-title">Customer</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={'/customer'} className='btn btn-primary float-right' >Customer List</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Customer</li>
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
                            <form className="form-horizontal"onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <h4 className="card-title">Customer Info</h4>
                                    {/* <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Bank Name</label>
                                        <div className="col-sm-9">
                                            {bank.length > 0 && 
                                                <select className="form-control" id="bank_id" name='bank_id' defaultValue={inputs.bank_id} onChange={handleChange}>
                                                    <option value="">Select Bank</option>
                                                    {bank.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Branch</label>
                                        <div className="col-sm-9">
                                       
                                        {bank_branch.length > 0 && 
                                                <select className="form-control" id="bank_branch_id" name='bank_branch_id' defaultValue={inputs.bank_branch_id} onChange={handleChange}>
                                                    <option value="">Select Branch</option>
                                                    {bank_branch.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div> */}
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Father Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="father_name" name='father_name' defaultValue={inputs.father_name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Mother Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="mother_name" name='mother_name' defaultValue={inputs.mother_name} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Contact Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="contact_no" name='contact_no' defaultValue={inputs.contact_no} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">NID</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="nid" name='nid' defaultValue={inputs.nid} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Image</label>
                                        <div className="col-sm-9">
                                        <input type="file" id="email-id-vertical" className="form-control" multiple defaultValue={inputs.image} name="image" onChange={handelFile} placeholder="Image" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Nid Image</label>
                                        <div className="col-sm-9">
                                        <input type="file" id="email-id-vertical" className="form-control" multiple defaultValue={inputs.nid_image} name="nid_image" onChange={handelFile} placeholder="Image" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Nid Image Back Part</label>
                                        <div className="col-sm-9">
                                        <input type="file" id="email-id-vertical" className="form-control" multiple defaultValue={inputs.nid_image_back} name="nid_image_back" onChange={handelFile} placeholder="Image" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Email</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="email" name='email' defaultValue={inputs.email} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Permanent Address</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="per_address" name='per_address' defaultValue={inputs.per_address} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Present Address</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="pre_address" name='pre_address' defaultValue={inputs.pre_address} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Date Of Birth</label>
                                        <div className="col-sm-9">
                                            <input type="date" className="form-control" id="dob" name='dob' defaultValue={inputs.dob} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Gender</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="gender" name='gender' defaultValue={inputs.gender} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Reference Id</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="ref_id" name='ref_id' defaultValue={inputs.ref_id} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Income</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="income" name='income' defaultValue={inputs.income} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Occupation</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="occupation" name='occupation' defaultValue={inputs.occupation} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Balance</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="balance" name='balance' defaultValue={inputs.balance} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    {/* <h4 className="card-title">Additional Services</h4>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Would you like to receive a debit card</label>
                                        <div class="col-md-9">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation1" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation1">Yes</label>
                                        </div>
                                         <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation2">No</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row javascript:void(0)">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Would you like to set up direct deposit?</label>
                                        <div class="col-md-9">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation1" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation1">Yes</label>
                                        </div>
                                         <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation2">No</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Would you like to enroll in online banking?</label>
                                        <div class="col-md-9">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation1" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation1">Yes</label>
                                        </div>
                                         <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
                                            <label className="custom-control-label" for="customControlValidation2">No</label>
                                        </div>
                                    </div>
                                    </div> */}
                                    
                               
                                <div className="form-group"></div>
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

export default CustomerAdd