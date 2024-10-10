import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
 
function StatementList(){
    return(
        <AdminLayout>
        <div className="page-wrapper">
            <div className='row'>
            <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title m-b-0">Bank Statement</h5>
                            </div>
                            
        <div className="col-10 ">
          <p style={{color: '#7e8d9f',fontSize: '20px'}}>Account <strong>123-123</strong></p>
        </div>
        <ul className="list-unstyled">
              <li className="text-muted pl-3 "> <strong style={{color: 'black'}}>Name:</strong> <strong style={{color: 'black', fontSize: '17px'}}>John Lorem</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Father's Name:</strong> <strong style={{color: 'black'}}>John Lorem</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Address:</strong> <strong style={{color: 'black'}}>John Lorem</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Account:</strong> <strong style={{color: 'black'}}>13242432342</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Account Type: </strong><strong style={{color: 'black'}}>savings</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Opening Date: </strong><strong style={{color: 'black'}}>savings</strong></li>
              <li className="text-muted pl-3 mt-2"> <strong style={{color: 'black'}}>Customer ID:</strong> <strong style={{color: 'black'}}>savings</strong></li>
              <li className="text-muted pl-3 mt-2"><i className="fas fa-phone"></i><strong style={{color: 'black'}}> 123-456-789</strong></li>
            </ul>
          
          
                        </div>
                    </div>
                    <div className="row">
          <div className="col-12">
           
          </div>
        </div>

            </div>
           
        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title m-b-0">Static Table With Checkboxes</h5>
                            </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead">
                                            <tr>
                                                 
                                                <th scope="col">Trans Date</th>
                                                <th scope="col">Post Date</th>
                                                <th scope="col">Instuement No</th>
                                                <th scope="col">Withdraw</th>
                                                <th scope="col">Deposit</th>
                                                <th scope="col">Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody className="customtable">
                                            <tr>
                                                
                                                <td>Trident</td>
                                                <td>Internet Explorer 4.0</td>
                                                <td>Win 95+</td>
                                                <td>4</td>
                                                <td>4</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                 
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.0</td>
                                                <td>Win 95+</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                 
                                                <td>Trident</td>
                                                <td>Internet Explorer 4.0</td>
                                                <td>Win 95+</td>
                                                <td>4</td>
                                                <td>4</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.0</td>
                                                <td>Win 95+</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                 
                                                <td>Trident</td>
                                                <td>Internet Explorer 5.5</td>
                                                <td>Win 95+</td>
                                                <td>5.5</td>
                                                <td>5.5</td>
                                                <td>5.5</td>
                                            </tr>
                                            <tr>
                                                
                                                <td>Trident</td>
                                                <td>Internet Explorer 6</td>
                                                <td>Win 98+</td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>6</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
           
          
               </div>
             
               
              
         
           
           
           
       
       </AdminLayout>
    )
}
export default StatementList; 