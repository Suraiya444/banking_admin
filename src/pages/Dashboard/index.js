import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
   
   <div className="page-wrapper">
        
        <div className="page-breadcrumb">
          <div className="row">
              <div className="col-12 d-flex no-block align-items-center">
                  <h4 className="page-title">Dashboard</h4>
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
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-cyan text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"></i></h1>
                          <h6 className="text-white">Total Client</h6>
                          <h6 className="text-white">3678</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-4 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-success text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"></i></h1>
                          <h6 className="text-white">Services</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-warning text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-collage"></i></h1>
                          <h6 className="text-white">Customer</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-danger text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-border-outside"></i></h1>
                          <h6 className="text-white">Deposit</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-info text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-arrow-all"></i></h1>
                          <h6 className="text-white">Transaction</h6>
                      </div>
                  </div>
              </div>
                
              <div className="col-md-6 col-lg-4 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-danger text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-receipt"></i></h1>
                          <h6 className="text-white">Money Transfer</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-info text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-relative-scale"></i></h1>
                          <h6 className="text-white">Bill Pay</h6>
                      </div>
                  </div>
              </div>
                
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-cyan text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-pencil"></i></h1>
                          <h6 className="text-white">Tax pay</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-success text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-calendar-check"></i></h1>
                          <h6 className="text-white">Calnedar</h6>
                      </div>
                  </div>
              </div>
              
              <div className="col-md-6 col-lg-2 col-xlg-3">
                  <div className="card card-hover">
                      <div className="box bg-warning text-center">
                          <h1 className="font-light text-white"><i className="mdi mdi-alert"></i></h1>
                          <h6 className="text-white">Interest Rate</h6>
                      </div>
                  </div>
              </div>
              
          </div>
          
          <div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-body">
                          <div className="d-md-flex align-items-center">
                              <div>
                                  <h4 className="card-title">Site Analysis</h4>
                                  <h5 className="card-subtitle">Overview of Latest Month</h5>
                              </div>
                          </div>
                          <div className="row">
                              
                              <div className="col-lg-9">
                                  <div className="flot-chart">
                                      <div className="flot-chart-content" id="flot-line-chart"></div>
                                  </div>
                              </div>
                              <div className="col-lg-3">
                                  <div className="row">
                                      <div className="col-6">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-user m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">2540</h5>
                                              <small className="font-light">Total Users</small>
                                          </div>
                                      </div>
                                        <div className="col-6">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-plus m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">120</h5>
                                              <small className="font-light">New Users</small>
                                          </div>
                                      </div>
                                      <div className="col-6 m-t-15">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-cart-plus m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">656</h5>
                                              <small className="font-light">Total Shop</small>
                                          </div>
                                      </div>
                                        <div className="col-6 m-t-15">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-tag m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">9540</h5>
                                              <small className="font-light">Total Orders</small>
                                          </div>
                                      </div>
                                      <div className="col-6 m-t-15">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-table m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">100</h5>
                                              <small className="font-light">Pending Orders</small>
                                          </div>
                                      </div>
                                      <div className="col-6 m-t-15">
                                          <div className="bg-dark p-10 text-white text-center">
                                              <i className="fa fa-globe m-b-5 font-16"></i>
                                              <h5 className="m-b-0 m-t-5">8540</h5>
                                              <small className="font-light">Online Orders</small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          
              
               
                 
                       
                        
                       
                   </div>
               </div>
               
           
 
    </AdminLayout>       
  )
}

export default Dashboard