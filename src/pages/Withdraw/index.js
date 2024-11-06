import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
 
function Withdraw(){
    return(
        <AdminLayout>
                 <div className="page-wrapper">
           
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-12 d-flex no-block align-items-center">
                        <h4 className="page-title">Withdraw</h4>
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
                    <div className="col-12">
                        
                        
                        
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Withdraw</h5>
                                <div className="table-responsive">
                                    <table id="zero_config" className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Account No</th>
                                                <th>Amount</th>
                                                <th>Date</th>
                                                <th>Balance</th>
                                                <th>Withdraw</th>
                                                <th>Action</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td  style={{ color: 'white'}}><a class="btn btn-danger btn-bg"><i class="fas fa-money-bill-alt"></i><i class="fas fa-download"><be/></i> Withdraw</a></td>
                                                 
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
export default Withdraw; 