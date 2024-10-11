import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function CustomerAdd() {
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
                                        <label for="fname" className="col-sm-3 text-right control-label col-form-label">Full Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="fname" placeholder="First Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Date Of Birth</label>
                                        <div className="col-sm-9">
                                       
                                        <input type="date" className="form-control date-inputmask" id="date-mask" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Gender</label>
                                        <div class="col-md-9">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation1" name="radio-stacked" />
                                            <label className="custom-control-label" for="customControlValidation1">Male</label>
                                        </div>
                                         <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked"  />
                                            <label className="custom-control-label" for="customControlValidation2">Female</label>
                                        </div>
                                         <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" />
                                            <label className="custom-control-label" for="customControlValidation3">Third gender</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="email1" className="col-sm-3 text-right control-label col-form-label">Email</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="email1" placeholder="email Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Phone No</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Phone No Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Address</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="address "/>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Account Type</h4>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Account Type</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Savings/Current/Joint/Business"/>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Employement Information</h4>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Employement Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Employed, Self-employed, Unemployed, Student, Retired"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Job Title (If Any)</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Title"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">Annual Income</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Income"/>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Identification Info</h4>
                                    <div className="form-group row">
                                        <label for="cono1" className="col-sm-3 text-right control-label col-form-label">NID/Passport</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="cono1" placeholder="Id No"/>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Additional Services</h4>
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

export default CustomerAdd