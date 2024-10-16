import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useLocation, Link} from 'react-router-dom';

function Sidebar() {
  const activeMenu = (e) => {
    document.querySelectorAll('.submenu').forEach(
        function (e) {
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if (childElement && childElement.classList.contains('submenu')) {
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
                
    return(
        <aside id="sidebar" className="sidebar"img src="../assets/img/img2.png">
    
        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <i className="bi bi-grid"></i>
              
              <span>Dashboard</span>
            </Link>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Insurance")}`}>
                    <Link to="/Insurance" className="sidebar-link">Insurance</Link></p>
              </li>
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/staffs")}`}>
              <Link to="/staffs" className="sidebar-link">Staff's Report</Link></p>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i><span>Staff's Reports</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i><span>Vendor's Report</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i><span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>{/*End Components Nav */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Booking list</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Airfreight")}`}>
              <Link to="/Airfreight" className="sidebar-link">Air Freight</Link></p>
              </li>
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Sailingfreight")}`}>
              <Link to="/Sailingfreight" className="sidebar-link">Sailing Freight</Link></p>
              </li>
              
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Highwayfreight")}`}>
              <Link to="/Highwayfreight" className="sidebar-link">Highway freight</Link></p>
              </li>
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Warehouse")}`}>
              <Link to="/Warehouse" className="sidebar-link">Warehouse</Link></p>
              </li>
            </ul>
          </li>{/*End Forms Nav */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>General Accounts</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Dues")}`}>
              <Link to="/Dues" className="sidebar-link">Accounts Receivable</Link></p>
              
              </li>
              <li>
                
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Pay")}`}>
              <Link to="/Pay" className="sidebar-link">Accounts Payable</Link></p>
              
              </li>
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Deals")}`}>
              <Link to="/Deals" className="sidebar-link">Transactions Summary</Link></p>
              </li>
            </ul>
          </li>{/*End Tables Nav */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart"></i><span>Vendors</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Info")}`}>
              <Link to="/Info" className="sidebar-link">Established Vendors</Link></p>
              </li>
              <li>
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Companieslist")}`}>
              <Link to="/Companieslist" className="sidebar-link">Vendor Representative</Link></p>
              </li>
            </ul>
          </li>{/*End Charts Nav */}
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem"></i><span>Authorised Person</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
              
                <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Admin")}`}>
                <Link to="/Admin" className="sidebar-link">Admin</Link></p>
              
              </li>
              <li>
                
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Staffs1")}`}>
              <Link to="/Staffs1" className="sidebar-link">Authorised Stuffs</Link></p>
                
              </li>
              <li>
                
                <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Person")}`}>
                <Link to="/Person" className="sidebar-link">Authorised Members</Link></p>
                
              </li>
            </ul>
          </li>{/*End Icons Nav */}
    
          {/* <li className="nav-heading">Pages</li> */}
    
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li> */}
    
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li> */}
    
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li> */}
    
        </ul>
    
      </aside>
    )
}

export default Sidebar