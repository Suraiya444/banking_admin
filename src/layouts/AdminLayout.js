import React from 'react';
 

 
function AdminLayout({children}) {
  return (
    <div id="app">
         
        <div id="main">
             
            <main>{children}</main>
            
        </div>
    </div>
  )
}

export default AdminLayout