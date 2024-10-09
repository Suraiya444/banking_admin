import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
   
        <div className="right_col" role="main">
          <div className="">
            <div className="row top_tiles" style={{margin: '10px 0'}}>
             
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel fixed_height_320">
                  <div className="x_title">
                    <h2>Profile Settings <small>Sessions</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div className="dashboard-widget-content">
                      <ul className="quick-list">
                        <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                        <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                        <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                        <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                        <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                      </ul>

                      <div className="sidebar-widget">
                        <h4>Profile Completion</h4>
                        <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                        <div className="goal-wrapper">
                          <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                          <span className="gauge-value pull-left">%</span>
                          <span id="goal-text" className="goal-value pull-right">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel fixed_height_320">
                  <div className="x_title">
                    <h2>Profile Settings <small>Sessions</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div className="dashboard-widget-content">
                      <ul className="quick-list">
                        <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                        <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                        <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                        <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                        <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                      </ul>

                      <div className="sidebar-widget">
                        <h4>Profile Completion</h4>
                        <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                        <div className="goal-wrapper">
                          <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                          <span className="gauge-value pull-left">%</span>
                          <span id="goal-text" className="goal-value pull-right">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="x_panel fixed_height_320">
                    <div className="x_title">
                      <h2>Profile Settings <small>Sessions</small></h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                      <div className="dashboard-widget-content">
                        <ul className="quick-list">
                          <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                          <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                          <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                          <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                          <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                        </ul>

                        <div className="sidebar-widget">
                          <h4>Profile Completion</h4>
                          <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                          <div className="goal-wrapper">
                            <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                            <span className="gauge-value pull-left">%</span>
                            <span id="goal-text" className="goal-value pull-right">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="x_panel fixed_height_320">
                    <div className="x_title">
                      <h2>Profile Settings <small>Sessions</small></h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                      <div className="dashboard-widget-content">
                        <ul className="quick-list">
                          <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                          <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                          <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                          <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                          <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                        </ul>

                        <div className="sidebar-widget">
                          <h4>Profile Completion</h4>
                          <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                          <div className="goal-wrapper">
                            <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                            <span className="gauge-value pull-left">%</span>
                            <span id="goal-text" className="goal-value pull-right">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="x_panel fixed_height_320">
                    <div className="x_title">
                      <h2>Profile Settings <small>Sessions</small></h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                      <div className="dashboard-widget-content">
                        <ul className="quick-list">
                          <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                          <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                          <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                          <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                          <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                        </ul>

                        <div className="sidebar-widget">
                          <h4>Profile Completion</h4>
                          <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                          <div className="goal-wrapper">
                            <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                            <span className="gauge-value pull-left">%</span>
                            <span id="goal-text" className="goal-value pull-right">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="x_panel fixed_height_320">
                    <div className="x_title">
                      <h2>Profile Settings <small>Sessions</small></h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                        </li>
                      </ul>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                      <div className="dashboard-widget-content">
                        <ul className="quick-list">
                          <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                          <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                          <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                          <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                          <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                        </ul>

                        <div className="sidebar-widget">
                          <h4>Profile Completion</h4>
                          <canvas width="150" height="80" id="chart_gauge_01" className="" style={{width: '160px', height: '100px'}}></canvas>
                          <div className="goal-wrapper">
                            <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                            <span className="gauge-value pull-left">%</span>
                            <span id="goal-text" className="goal-value pull-right">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
              
              
            </div>
            <br />


          

 
          </div>
        </div>
       
 
    </AdminLayout>       
  )
}

export default Dashboard