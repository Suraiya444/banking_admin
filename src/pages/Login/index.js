import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';

 function Login(){
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        console.log(check)
        if(check){
            window.location=process.env.REACT_APP_BASE_URL
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
    return(
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-white">
        <div className="auth-box bg-white border-top border-secondary">
            <div id="loginform">
                <div className="text-center p-t-20 p-b-20">
                    <span className="db"><img src="./assets_admin/assets/images/logo.png" alt="logo" /></span>
                </div>
                
                <form className="form-horizontal m-t-20" id="loginform" onSubmit={handleSubmit}>
                    <div className="row p-b-30">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-info text-white" id="basic-addon1"><i className="ti-user"></i></span>
                                </div>
                                <input type="text" className="form-control form-control-lg" placeholder="Username" name="email" onChange={handleChange} required=""/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                </div>
                                <input type="text" className="form-control form-control-lg" placeholder="Password" name="password" onChange={handleChange} required=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-secondary">
                        <div className="col-12">
                            <div className="form-group">
                                <div className=" mt-2 p-t-20">
                                    <button className="btn btn-link" id="to-recover" type="button"><i className="fa fa-user mr-3 mt-2"></i>Don't have an account</button>
                                    <button className="btn btn-link float-right" type="submit">Login</button>
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
 export default Login;