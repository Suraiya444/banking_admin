import React from 'react';
import { useState } from "react";
import AuthLayout from '../../layouts/AuthLayout';
import { Link ,useNavigate} from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();

    // let signup = async(inputs) => {
    //     await register(inputs);
    //     navigate('/signin');
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        await register(inputs);
        navigate('/login')
    }
  return (
    <AuthLayout>
       
        <div className="text-center mb-5">
           
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" className="form-control"  name="name_en" onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" className="form-control"  name="last-name" onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" name="email" onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="contact-no">Contact Number</label>
                        <input type="text" id="contact-no" className="form-control" name="contact_no_en" onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" name="password" onChange={handleChange}/>
                    </div>
                </div>
               
            </div>
                <Link to="/login">Have an account? Login</Link>      
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
                   
    </AuthLayout>
  )
}

export default Register