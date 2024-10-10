import React from "react";
function Register(){
    return(
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-white">
            <div className="auth-box bg-white border-top border-secondary">
                <div>
                    <div className="text-center p-t-20 p-b-20">
                        <span className="db"><img src="./assets_admin/assets/images/logo.png" alt="logo" /></span>
                    </div>
                    
                    <form className="form-horizontal m-t-20" action="index.html">
                        <div className="row p-b-30">
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon1"><i className="ti-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon1"><i className="ti-email"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil"></i></span>
                                    </div>
                                    <input type="text" className="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required/>
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