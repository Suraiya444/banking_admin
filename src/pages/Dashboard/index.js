import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                
            </div>
            <section className="section">
                
                    
                    
                    
                <div className="row mb-4">
                    <div className="col-md-12">
                        <div className="card">
                             
                            
                        </div>
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                 
                                <div className="d-flex ">
                                    <i data-feather="download"></i>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-0">
                                <div className="table-responsive">
                                    <table className='table mb-0' id="table1">
                                        <thead>
                                            <h3>OUR LOAN PLAN</h3>
                                            <tr>
                                                <th>TITLE</th>
                                                <th>LIMIT</th>
                                                <th>INSTALMENT</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Student</td>
                                                <td>Min: 10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                                
                                            </tr>
                                            <tr>
                                            <td>Education</td>
                                                <td>Min: 10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                            <tr>
                                            <td>Agriculture</td>
                                                <td>Min: 10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                            <tr>
                                            <td>Student</td>
                                                <td>Min: 10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                            <tr>
                                            <td>Student</td>
                                                <td>Min: ₹10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                            <tr>
                                            <td>Student</td>
                                                <td>Min: ₹10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                            <tr>
                                            <td>Student</td>
                                                <td>Min: ₹10000
                                                  Max: 100000</td>
                                                <td>3% of every 30 days for 35 times.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    </AdminLayout>       
  )
}

export default Dashboard