import React from "react";
import { Link,useLocation } from 'react-router-dom'

function Sidebar (){
  const activeMenu=(e)=>{
    document.querySelectorAll('.submenu').forEach(
        function(e){
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if(childElement && childElement.classList.contains('submenu')){
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path)=>{
    return location.pathname == path ? 'active' : "";
}
	 
    return (
      <aside className="left-sidebar" data-sidebarbg="skin5">
           
      <div className="scroll-sidebar">
          
          <nav className="sidebar-nav">
              <ul id="sidebarnav" className="p-t-10">
                   
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-home" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/bank">Bank</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-home" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/bank_branch">Bank Branch</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-nfc-variant" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/district">District</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/account_type">Account Type</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/bank_service">Bank Service</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-human-child" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/customer">Customer</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-human-child"style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/customer_account">Customer Account</Link> </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Basic </span></a></li>
                          <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Form Wizard </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-buttons.html" aria-expanded="false"><i className="mdi mdi-relative-scale" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/customer_service">Customer Service</Link> </span></a></li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-face" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/customer_type">Customer Category</Link>  </span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="icon-material.html" className="sidebar-link"><i className="mdi mdi-emoticon" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Material Icons </span></a></li>
                          <li className="sidebar-item"><a href="icon-fontawesome.html" className="sidebar-link"><i className="mdi mdi-emoticon-cool" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Font Awesome Icons </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-elements.html" aria-expanded="false"><i className="mdi mdi-pencil" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/loan_type">Loan Type</Link></span></a></li>
                  
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-account-key" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/loan">Loan</Link></span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="authentication-login.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Login </span></a></li>
                          <li className="sidebar-item"><a href="authentication-register.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Register </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-account-key" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/loan_payment">Loan Payment</Link></span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="authentication-login.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Login </span></a></li>
                          <li className="sidebar-item"><a href="authentication-register.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Register </span></a></li>
                      </ul>
                  </li>
                  
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-account-key" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to="/transfer">Transafer</Link></span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="authentication-login.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Login </span></a></li>
                          <li className="sidebar-item"><a href="authentication-register.html" className="sidebar-link"><i className="mdi mdi-all-inclusive" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Register </span></a></li>
                      </ul>
                  </li>
                  <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-alert" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}><Link to ="/beneficiary">Beneficiary</Link></span></a>
                      <ul aria-expanded="false" className="collapse  first-level">
                          <li className="sidebar-item"><a href="error-403.html" className="sidebar-link"><i className="mdi mdi-alert-octagon" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Error 403 </span></a></li>
                          <li className="sidebar-item"><a href="error-404.html" className="sidebar-link"><i className="mdi mdi-alert-octagon" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Error 404 </span></a></li>
                          <li className="sidebar-item"><a href="error-405.html" className="sidebar-link"><i className="mdi mdi-alert-octagon" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Error 405 </span></a></li>
                          <li className="sidebar-item"><a href="error-500.html" className="sidebar-link"><i className="mdi mdi-alert-octagon" style={{color: 'black'}}></i><span className="hide-menu" style={{color: 'black'}}> Error 500 </span></a></li>
                      </ul>
                  </li>
              </ul>
          </nav>
         
      </div>
      
  </aside>

    )
}
export default Sidebar;