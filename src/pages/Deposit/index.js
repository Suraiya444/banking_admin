import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

 
function Deposit(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({id:'', customer_id:'', customer_account_id:'', trans_date:'', amount:'',trans_type:'', description:'',});
    const [customer_account, setCustomerAccount] = useState([]);
    function getTask(data){
        setInputs(data);
        handleShow();
    }

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
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
                apiurl=`/deposit/${inputs.id}`;
            }else{
                apiurl=`/deposit`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            handleClose();
            getDatas();
             
        } 
        catch(e){
            console.log(e);
        }
    }
     
    const {customer_account_id} = useParams();

    const[data, setData]=useState([]);
    useEffect(() => {
        if(customer_account_id){
            setInputs(values => ({...values, ['customer_account_id']: customer_account_id}));
        }
        getDatas();
         
    }, []);


    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/deposit?customer_account_id=${customer_account_id}`,config).then(function(response) {
            setCustomerAccount(response.data.data);
        });
    }


    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/deposit/${id}`,config).then(function(response){
            getDatas();
        });
    }

    return(
        <AdminLayout>
                 <div className="page-wrapper">
           
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Tables</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <button type='button' onClick={handleShow} className='btn btn-success'>Add Deposit</button>
                                    <li className="breadcrumb-item active" aria-current="page">Deposite</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12">
                        
                        
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Deposit</h5>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#SL</th>
                                                <th>Name</th>
                                                <th>Account No</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Balance</th>
                                                <th>Deposit</th>
                                                <th>Action</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.map((d, key) => 
                                        <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.customer?.name}</td>
                                <td>{d.customer_account?.account_no}</td>
                                <td>{d.trans_date}</td>
                                <td>{d.amount}</td>
                                <td>{d.trans_type}</td>
                                <td>{d.description}</td>
                                <td style={{ color: 'white'}}><a class="btn btn-success btn-bg"><i class="fas fa-money-bill-alt"></i><i class="fas fa-upload"><be/></i> Deposit</a></td>
                                <td>
                                    <button type='button' onClick={() => getTask(d)} className='btn btn-info'>Edit</button>
                                    <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                    
                                </td>
                                        
                                </tr>
                                    )}
                                        </tbody>
                                        
                                         
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>

             <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
             <Modal.Header closeButton>
            <Modal.Title>Deposit </Modal.Title>
           </Modal.Header>
           <Modal.Body >
           <form className=""  onSubmit={handleSubmit}>
           <div className="row md-6">
                    <div className="mb-6 col-md-6">
                        <label htmlFor="projectId" className="form-label">Customer Name<sup className=" text-danger">*</sup></label>
                        
                            <input
                            readOnly
                            placeholder="customer name"
                            type="text"
                            className={`form-control ${errors.customer_id ? 'is-invalid' : ''}`}
                            id="customer_id"
                            name="customer_id"
                            defaultValue={inputs.customer_id}
                            onChange={handleChange}
                            // {projectfile.map((d, key)=>

                            // defaultValue={d.id}>{d.id}
                            
                            // )}
                            />
                        
                        {errors.customer_id && <div className="invalid-feedback">{errors.customer_id}</div>}
                    </div>
                    <div className="mb-6 col-md-6">
                        <label htmlFor="customerId" className="form-label">Customrt Account Id<sup className=" text-danger">*</sup></label>
                        <input
                              readOnly
                            placeholder="Account"
                            type="text"
                            className={`form-control ${errors.customer_account_id ? 'is-invalid' : ''}`}
                            id="customer_account_id"
                            name="customer_account_id"
                            defaultValue={inputs.customer_account_id}
                            onChange={handleChange}
                        />
                        {errors.customer_account_id && <div className="invalid-feedback">{errors.customer_account_id}</div>}
                    </div>
                    <div className="mb-6 col-md-6">
                        <label htmlFor="note">Date<sup className=" text-danger">*</sup></label>
                        <input
                             
                             
                            type="date"
                            className={`form-control ${errors.trans_date ? 'is-invalid' : ''}`}
                            id="trans_date"
                            name="trans_date"
                            defaultValue={inputs.trans_date}
                            onChange={handleChange}
                        />
                        {errors.trans_date && <div className="invalid-feedback">{errors.trans_date}</div>}
                    </div>
                    
                    <div className="mb-6 col-md-6">
                        <label htmlFor="task">Amount<sup className=" text-danger">*</sup></label>
                        <input 
                            type="text"
                            className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                            id="amount"
                            name="amount"
                            defaultValue={inputs.amount}
                            onChange={handleChange}
                        />
                        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                    </div> 

                    <div className="mb-3 col-md-6">
                        <label htmlFor="attachment" className="form-label">Transaction<sup className=" text-danger">*</sup></label>
                        <input
                            
                            placeholder="Deposit"
                            type="text"
                            className={`form-control ${errors.trans_type ? 'is-invalid' : ''}`}
                            id="trans_type"
                            name="trans_type"
                            defaultValue={inputs.trans_type}
                            onChange={handleChange}
                        />
                        {errors.trans_type && <div className="invalid-feedback">{errors.trans_type}</div>}
                    </div>
                    <textarea
                        name="description"
                        defaultValue={inputs.description}
                        onChange={handleChange}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder='Write Note' required id="description" rows="1"></textarea>
                        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Deposit</button>
                </form>
           </Modal.Body>
            </Modal>                       
           
        </div>
        </AdminLayout>
    )
}
export default Deposit;