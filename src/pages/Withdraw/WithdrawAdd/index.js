import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout';

function WithdrawAdd() {
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
                                    <h4 className="card-title">Withdraw</h4>
                                    <div className="form-group row">
                                        <label for="fname" className="col-sm-3 text-right control-label col-form-label">Account Number</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="fname" placeholder="account no.."/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label"> Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="lname" placeholder="Name Here"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="lname" className="col-sm-3 text-right control-label col-form-label">Branch</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" id="lname" placeholder="branch"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="email1" className="col-sm-3 text-right control-label col-form-label">Amount</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="email1" placeholder="amount"/>
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

export default WithdrawAdd;