// import React, { useEffect, useState } from 'react';
// import axios from '../../../components/axios';
// import AdminLayout from '../../../layouts/AdminLayout';
// import { useNavigate } from 'react-router-dom';
// import {useParams} from "react-router-dom";
// import {Link} from "react-router-dom";

// function DistrictAdd() {
//     const [inputs, setInputs] = useState({id :'',name:''});
//     const navigate=useNavigate();
//     const {id} = useParams();


//     const getDatas = async (e)=>{
//         let response = await axios.get(`/district/${id}`)
//             setInputs(response.data.data);
       
//     }

//     useEffect(() => {
//         if(id){
//             getDatas();
//         }
//     }, []);

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         console.log(inputs)
        
//         try{
//             let apiurl='';
//             if(inputs.id!=''){
//                   apiurl =`/district/${inputs.id}?_method=put`;
//             }else{
//                 apiurl=`/district `;
//             }
            
//             let res = await axios.post(apiurl, inputs)
//             console.log(res);
//             navigate('/district')
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }



//     // const config = {
//     //     headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
//     // };
//     // function getDatas(){
//     //     axios.get(`${process.env.REACT_APP_API_URL}/district/${id}`,config).then(function(response) {
//     //         setInputs(response.data.data);
//     //     });
//     // }
    
//     // useEffect(() => {
//     //     if(id){
//     //         getDatas();
//     //     }
//     // }, []);

//     // const handleChange = (event) => {
//     //     const name = event.target.name;
//     //     const value = event.target.value;
//     //     setInputs(values => ({...values, [name]: value}));
//     // }

//     // const handleSubmit = async(e) => {
//     //     e.preventDefault();
//     //     //console.log(inputs)
        
//     //     try{
//     //         let apiurl='REACT_APP_API_URL';
//     //         let mtd='';
//     //         if(inputs.id!=''){
//     //             mtd='put';
//     //             apiurl=`/district/${inputs.id}`;
//     //         }else{
//     //             mtd='post';
//     //             apiurl=`/district`;
//     //         }
            
//     //         let response= await axios({
//     //             method: mtd,
//     //             responsiveTYpe: 'json',
//     //             url: `${process.env.REACT_APP_API_URL}${apiurl}`,
//     //             data: inputs,
//     //             headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
//     //         });
//     //         navigate('/district')
//     //     } 
//     //     catch(e){
//     //         console.log(e);
//     //     }
//     // }
//   return (
//     <AdminLayout>
//         <div className="page-wrapper">
//             <div className="page-breadcrumb">
//                 <div className="row">
//                     <div className="col-12 d-flex no-block align-items-center">
//                         <h4 className="page-title">District</h4>
//                         <div className="ml-auto text-right">
//                             <nav aria-label="breadcrumb">
//                                 <ol className="breadcrumb">
//                                     <li className="breadcrumb-item"><Link to={'/district'} className='btn btn-primary float-right' >District List</Link></li>
//                                     <li className="breadcrumb-item active" aria-current="page">Dstrict</li>
//                                 </ol>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
           
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="card">
//                             <form  className="form-horizontal" onSubmit={handleSubmit}>
//                                 <div className="card-body">
//                                     <h4 className="card-title">District</h4>
//                                     <div className="form-group row">
//                                         <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">District Name</label>
//                                         <div className="col-sm-9">
//                                             <input type="text" className="form-control" id="name" name='name' defaultValue={inputs.name} onChange={handleChange}/>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="border-top">
//                                     <div className="card-body">
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </AdminLayout>
    
//   )
// }

// export default DistrictAdd