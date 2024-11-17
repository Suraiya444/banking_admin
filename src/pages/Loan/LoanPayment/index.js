// import React, { useEffect, useState } from 'react';
// import axios from '../../../components/axios';
// import AdminLayout from '../../../layouts/AdminLayout';
// import { Link } from 'react-router-dom';
// import {useParams} from "react-router-dom";
// import Modal from 'react-bootstrap/Modal';


// function LoanPayment(){

//     // const [show, setShow] = useState(false);
//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);

//     const [errors, setErrors] = useState([]);
//     const [inputs, setInputs] = useState({id:'', pay_date:'', amount:''});
   

//     // function getTask(data){
//     //     setInputs(data);
//     //     handleShow();
//     // }
//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         try{
//             let apiurl='';
//             if(inputs.id!=''){
//                   apiurl =`/customer_account/${inputs.id}?_method=put`;
//             }else{
//                 apiurl=`/customer_account `;
//             }
            
//             let res = await axios.post(apiurl, inputs)
//             console.log(res);
//             navigate('/customer_account')
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }

//     const {id} = useParams();
//     const config = {
//         headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
//     };

//     useEffect(() => {
//         getDatas();
//     }, []);

//     function getDatas (){
//         axios.get(`${process.env.REACT_APP_API_URL}/loan/${id}`,config).then(function(response) {
//             setData(response.data.data);
//             console.log(response.data)
//         });
        
       
//     }
//     // const {payment_no} = useParams();

//     // const[data, setData]=useState([]);
//     // useEffect(() => {
//     //     if(payment_no){
//     //         setInputs(values => ({...values, ['payment_no']: payment_no}));
//     //     }
//     //     getDatas();
//     // }, []);
  
//     // function getDatas() {
//     //     axios.get(`${process.env.REACT_APP_API_URL}/loan_payment?payment_no=${payment_no}`).then(function(response) {
//     //         setData(response.data.data);
//     //     });
//     // }
    

//     return(
//         <AdminLayout>
//             <div className="page-wrapper">
//             <div className="page-breadcrumb">
//                 <div className="row">
//                     <div className="col-12 d-flex no-block align-items-center">
//                         <h4 className="page-title">Active Customer Loan List</h4>
//                         <div className="ml-auto text-right">
//                             <nav aria-label="breadcrumb">
//                                 <ol className="breadcrumb">
//                                     <li className="breadcrumb-item"><a href="#">Loan List</a></li>
//                                     <li className="breadcrumb-item active" aria-current="page">Loan</li>
//                                 </ol>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
           
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Customer Loan Payment</h5>
                                
//                                 <div className="table-responsive">
//                                 <table id="zero_config" className="table table-striped table-bordered">
//                                         <thead>
//                                             <tr>
//                                                 <th><strong>Payment Number</strong></th>
//                                                 <th><strong>Balance</strong></th>
//                                                 <th><strong>Payment</strong></th>
//                                                 <th><strong>Principal</strong></th>
//                                                 <th><strong>Interest</strong></th>
//                                                 <th><strong>Due Date</strong></th>
//                                                 <th><strong>Pay Date</strong></th>
//                                                 <th><strong>Amount</strong></th>
//                                                 <th><strong>Action</strong></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                         {data.loan_details && data.loan_details.map((d, key) =>
//                                         <tr key={d.id}>
//                                             <td>{d.payment_no}</td>  
//                                             <td>{d.loan_balance}</td>
//                                             <td>{d.payment}</td>
//                                             <td>{d.pricipal}</td>                                         
//                                             <td>{d.interest}</td>
//                                             <td>{d.pay_date}</td>
//                                             <td>{d.expected_date}</td>
                                            
//                                             <td>{d.actual_date}</td>
//                                             <button type='button'  className='btn btn-danger'>Payment</button>
//                                         </tr>
//                                     )}
//                                         </tbody>
                                        
//                                     </table>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
                 
//             </div>
//             {/* <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Task Progress</Modal.Title>
//                 </Modal.Header>
//                     <Modal.Body>
//                         <form onSubmit={handleSubmit}>
//                             <div className="row md-6">
//                                 <div className="mb-6 col-md-6">
//                                     <label htmlFor="projectId" className="form-label">Payment Date<sup className=" text-danger">*</sup></label>
//                                     <inpu type="date" className="pay_date" id="pay_date" name="pay_date" defaultValue={inputs.pay_date} onChange={handleChange} />
//                                 </div>
//                                 <div className="mb-6 col-md-6">
//                                     <label htmlFor="customerId" className="form-label">Amount<sup className=" text-danger">*</sup></label>
//                                     <input placeholder="amount"type="number"className="amount"id="amount" name="amount" defaultValue={inputs.amount} onChange={handleChange}/>
//                                 </div>
//                             </div>
//                             <button type="submit" className="btn btn-primary mt-3">Save Task</button>
//                         </form>
//                     </Modal.Body>
//            </Modal> */}
           
//         </div> 
//         </AdminLayout>
//     )
// }
// export default LoanPayment; 





import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
// import axios from '../../components/axios';
// import AdminLayout from '../../../layouts/AdminLayout';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import FormModal from '../../../components/FormModal';

function LoanPayment(){
    const navigate=useNavigate();
    const[data, setData]=useState([]);
    const {id} = useParams();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({id:'', actual_date:'', payment:''});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (d) => {
        console.log(d);
        setInputs(values => ({...values, ['actual_date']: d.actual_date}));
        setInputs(values => ({...values, ['payment']: d.payment}));
        setInputs(values => ({...values, ['id']: d.id}));
        setShow(true); 
    };

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas (){
        axios.get(`${process.env.REACT_APP_API_URL}/loan/${id}`,config).then(function(response) {
            setData(response.data.data);
            console.log(response.data)
        });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let apiurl =`/loan/${inputs.id}?_method=put`;
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/loan')
        }
        catch (e) {
            console.log(e);
        }
    }

    return(
        <AdminLayout>
            <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Active Customer Loan List</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Loan List</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Loan</li>
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
                                <h5 className="card-title">Customer Loan Payment</h5>
                                
                                <div className="table-responsive">
                                <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>Payment Number</strong></th>
                                                <th><strong>Balance</strong></th>
                                                <th><strong>Payment</strong></th>
                                                <th><strong>Principal</strong></th>
                                                <th><strong>Interest</strong></th>
                                                <th><strong>Due Date</strong></th>
                                                <th><strong>Pay Date</strong></th>
                                                <th><strong>Action</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.loan_details && data.loan_details.map((d, key) =>
                                        <tr key={d.id}>
                                            <td>{d.payment_no}</td>  
                                            <td>{d.loan_balance}</td>
                                            <td>{d.payment}</td>
                                            <td>{d.pricipal}</td>
                                            
                                            <td>{d.interest}</td>
                                            <td>{d.pay_date}</td>
                                           
                                            <td>{d.actual_date}</td>
                                            <td>
                                                {!d.actual_date ?
                                                    <button onClick={(e)=>{handleShow(d)}} type='button'className='btn btn-danger'>Pay</button>
                                                    :
                                                    <>
                                                        <button type='button'className='btn btn-success'>Paid</button>
                                                    </>
                                                }
                                            </td>
                                        </tr>
                                    )}
                                        </tbody>
                                        
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        
                    </div>
                </div>
                 
            </div>
            <FormModal show={show} handleClose={handleClose} handleSubmit={handleSubmit}>

               
                <div className="row md-6">
                    <div className="mb-6 col-md-6">
                        <label htmlFor="actual_date" className="form-label">Payment Date<sup className=" text-danger">*</sup></label>
                        <input type="date" className="form-control" id="actual_date" name="actual_date" defaultValue={inputs.actual_date} onChange={handleChange} />
                    </div>
                    <div className="mb-6 col-md-6">
                        <label htmlFor="payment" className="form-label">Amount<sup className=" text-danger">*</sup></label>
                        <input readOnly placeholder="amount"type="number" className="form-control" id="payment" name="payment" defaultValue={inputs.payment} onChange={handleChange}/>
                    </div>
                </div>
                
                    
            </FormModal>   
        </div>
            
        </AdminLayout>
    )
}
export default LoanPayment; 