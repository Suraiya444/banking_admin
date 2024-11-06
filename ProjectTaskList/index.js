import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
//model

import Modal from 'react-bootstrap/Modal';
//

function ProjectTaskList() {
     //model
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     /*add form */
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({id:'', projectId:'', employeeId:'', note:'', task:'', assignDate:'', finishDate:'', actualDate:'',});
    /* for edit */
    function getTask(data){
        setInputs(data);
        handleShow();
    }
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
                apiurl=`/task/edit/${inputs.id}`;
            }else{
                apiurl=`/task/create`;
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
    
    //
    const {projectId} = useParams();

    const[data, setData]=useState([]);
    useEffect(() => {
        if(projectId){
            setInputs(values => ({...values, ['projectId']: projectId}));
        }
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/task/index?projectId=${projectId}`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/task/${id}`).then(function(response){
            getDatas();
        });
    }
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Projects Task</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project Task</a></li>
                        <li className="breadcrumb-item active">Projects Task List</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">

                {/* Default box */}
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Project Task List</h3>

                    <div className="card-tools">
                        <button type='button' onClick={handleShow} className='btn btn-success'>Add Task</button>

                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times"></i>
                    </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects table-responsive">
                        <thead className='text-nowrap'>
                            <tr className="text-center">
                                <th>SL</th>
                                <th>Project Name</th>
                                <th>Employee</th>
                                <th>Note</th>
                                <th>Task</th>
                                <th>Assign Date</th>
                                <th>Finish Date</th>
                                <th>Actual Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {data && data.map((d, key) =>
                            <tr key={d.id} >
                                <td>{d.id}</td>
                                <td>{d.projectfiles?.projectName}</td>
                                <td>{d.employeeId}</td>
                                <td>{d.note}</td>
                                <td>{d.task}</td>
                                <td>{d.assignDate}</td>
                                <td>{d.finishDate}</td>
                                <td>{d.actualDate}</td>
                                <td>
                                    <button type='button' onClick={() => getTask(d)} className='btn btn-info'>Edit</button>
                                    <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                    
                                </td>
                            </tr>
                             )}
                        </tbody>
                    </table>
                </div>
                {/* /.card-body */}
            </div>
                {/* /.card */}
        </section>
        {/* /.content */}


        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Task Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div className="row md-6">
                    <div className="mb-6 col-md-6">
                        <label htmlFor="projectId" className="form-label">Project Id<sup className=" text-danger">*</sup></label>
                        
                            <input
                            readOnly
                            placeholder="Project Id"
                            type="number"
                            className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                            id="projectId"
                            name="projectId"
                            defaultValue={inputs.projectId}
                            onChange={handleChange}
                            // {projectfile.map((d, key)=>

                            // defaultValue={d.id}>{d.id}
                            
                            // )}
                            />
                        
                        {errors.projectId && <div className="invalid-feedback">{errors.projectId}</div>}
                    </div>
                    <div className="mb-6 col-md-6">
                        <label htmlFor="customerId" className="form-label">Employe Id<sup className=" text-danger">*</sup></label>
                        <input
                            required
                            placeholder="Employe Id"
                            type="number"
                            className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`}
                            id="employeeId"
                            name="employeeId"
                            defaultValue={inputs.employeeId}
                            onChange={handleChange}
                        />
                        {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
                    </div>
                    <div className="mb-6 col-md-6">
                        <label htmlFor="note">Note<sup className=" text-danger">*</sup></label>
                        <textarea
                        name="note"
                        defaultValue={inputs.note}
                        onChange={handleChange}
                        className={`form-control ${errors.note ? 'is-invalid' : ''}`} placeholder='Write Note' required id="note" rows="1"></textarea>
                        {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                    </div>
                    
                    <div className="mb-6 col-md-6">
                        <label htmlFor="task">Task<sup className=" text-danger">*</sup></label>
                        <textarea
                        name="task"
                        defaultValue={inputs.task}
                        onChange={handleChange}
                        className={`form-control ${errors.task ? 'is-invalid' : ''}`} placeholder='Write Note' required id="task" rows="1"></textarea>
                        {errors.task && <div className="invalid-feedback">{errors.task}</div>}
                    </div>

                    <div className="mb-3 col-md-6">
                        <label htmlFor="attachment" className="form-label">Assign Date<sup className=" text-danger">*</sup></label>
                        <input
                            required
                            placeholder="Assign Date"
                            type="date"
                            className={`form-control ${errors.assignDate ? 'is-invalid' : ''}`}
                            id="assignDate"
                            name="assignDate"
                            defaultValue={inputs.assignDate}
                            onChange={handleChange}
                        />
                        {errors.assignDate && <div className="invalid-feedback">{errors.assignDate}</div>}
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="attachment" className="form-label">Finish Date<sup className=" text-danger">*</sup></label>
                        <input
                            placeholder="Finish Date"
                            type="date"
                            className={`form-control ${errors.finishDate ? 'is-invalid' : ''}`}
                            id="finishDate"
                            name="finishDate"
                            defaultValue={inputs.finishDate}
                            onChange={handleChange}
                        />
                        {errors.finishDate && <div className="invalid-feedback">{errors.finishDate}</div>}
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="attachment" className="form-label">Actual Date </label>
                        <input
                            placeholder="Actual Date"
                            type="date"
                            className={`form-control ${errors.actualDate ? 'is-invalid' : ''}`}
                            id="actualDate"
                            name="actualDate"
                            defaultValue={inputs.actualDate}
                            onChange={handleChange}
                        />
                        {errors.actualDate && <div className="invalid-feedback">{errors.actualDate}</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save Task</button>
            </form>
        </Modal.Body>
      </Modal>
    </div>
</AdminLayout>
    );
}

export default ProjectTaskList;
