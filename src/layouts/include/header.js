import React from "react";


function Header(){
    return(
        <div class="left_col scroll-view">
        <div class="navbar nav_title" style={{border: '0'}}>
          <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
        </div>
          <div class="clearfix"></div>


      <div class="profile clearfix">
          <div class="profile_pic">
            <img src="images/img.jpg" alt="..." class="img-circle profile_img"/>
          </div>
          <div class="profile_info">
            <span>Welcome,</span>
            <h2>John Doe</h2>
          </div>
      </div>
      </div>
        
    )

}
export default Header;