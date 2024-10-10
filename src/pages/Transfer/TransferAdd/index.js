import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout';

function TransferAdd() {
  return (
    
        <AdminLayout>
         <div className="page-wrapper">
            
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Form Basic</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
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
                            <form className="form-horizontal">
                                <div className="card-body">
                                    <h4 className="card-title">Personal Info</h4>
                                    <div className="form-group row">
                                        <label for="fname" className="col-sm-3 text-right control-label col-form-label">First Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="fname" placeholder="First Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="lname" placeholder="Last Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" id="lname" placeholder="Password Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="email1" className="col-sm-3 text-right control-label col-form-label">Company</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="email1" placeholder="Company Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Contact No</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Contact No Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Message</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group m-t-20">
                                    <label>Date Mask <small className="text-muted">dd/mm/yyyy</small></label>
                                    <input type="text" className="form-control date-inputmask" id="date-mask" placeholder="Enter Date"/>
                                </div>
                                <div className="form-group">
                                    <label>Phone <small className="text-muted">(999) 999-9999</small></label>
                                    <input type="text" className="form-control phone-inputmask" id="phone-mask" placeholder="Enter Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <label>International Number <small className="text-muted">+19 999 999 999</small></label>
                                    <input type="text" className="form-control international-inputmask" id="international-mask" placeholder="International Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <label>Phone / xEx <small className="text-muted">(999) 999-9999 / x999999</small></label>
                                    <input type="text" className="form-control xphone-inputmask" id="xphone-mask" placeholder="Enter Phone Number"/>
                                </div>
                                <div className="form-group"></div>
                                </div>
                                <div className="border-top">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-primary">Submit</button>
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

export default TransferAdd;