import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar'
 

 
function AdminLayout({children}) {
  return (
    <div id="app">
        <Header />
        <div id="main">
        <Sidebar />
        <main>{children}</main>
            
        </div>
    </div>
  )
}

export default AdminLayout