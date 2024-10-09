import * as React from 'react';

import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
 import CustomerAdd from './pages/Customer/CustomerAdd';
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
  
   
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/customer/add" element={<CustomerAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
