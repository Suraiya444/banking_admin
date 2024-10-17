import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
 
function Deposit(){
    return(
        <AdminLayout>
                 <div className="page-wrapper">
           
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Tables</h4>
                        <div className="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"> <Link to="/deposit/add">Add</Link></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12">
                        
                        
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Deposit</h5>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Account No</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Balance</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kamal</td>
                                                <td>557575334</td>
                                                <td>10000</td>
                                                <td>10/2/24</td>
                                                <td>6000</td>
                                                 
                                            </tr>
                                            <tr>
                                                <td>jamal</td>
                                                <td>87686867876866</td>
                                                <td>500000</td>
                                                <td>10/2/24</td>
                                                <td>7000</td>
                                                
                                            </tr>
                                            

                                        </tbody>
                                        
                                         
                                    </table>
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
export default Deposit;