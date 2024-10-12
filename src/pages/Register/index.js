import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register(){
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs);
        //navigate('/login')
    }
    return(
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-white">
            <div className="auth-box bg-white border-top border-secondary">
                <div>
                    <div className="text-center p-t-20 p-b-20">
                        <span className="db"><img src="./assets_admin/assets/images/logo.png" alt="logo" /></span>
                    </div>
                    
                    <form className="form-horizontal m-t-20" onSubmit={handleSubmit}>
                        <div className="row p-b-30">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon1"><i className="ti-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Full Name" onChange={handleChange} name="name" required/>
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon1"><i className="ti-email"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" onChange={handleChange} name="email" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                    </div>
                                    <input type="password" className="form-control form-control-lg" onChange={handleChange} name="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                    </div>
                                    <input type="password" className="form-control form-control-lg" onChange={handleChange} name="c_password" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top border-secondary">
                            <div className="col-12">
                                <div className="form-group">
                                    <div className="p-t-20">
                                        <button className="btn btn-block btn-lg btn-info" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 

export default Register;