import * as React from 'react';

import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
 import CustomerAdd from './pages/Customer/CustomerAdd';
 import Deposit from './pages/Deposit';
 import DepositAdd from './pages/Deposit/CustomerAdd';
 import Transfer from './pages/Transfer';
 import TransferAdd from './pages/Transfer/TransferAdd';
 import Withdraw from './pages/Withdraw';
 import WithdrawAdd from './pages/Withdraw/WithdrawAdd';
 import Statement from './pages/Statement';
 import StatementList from './pages/Statement/StatementList';
 import Login from './pages/Login';
 import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

 
function App() {
  
   
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={< Login/>}/>
      <Route path="/register" element={< Register/>}/>
      <Route path="/" element={<Dashboard />} />
     < Route path="/customer" element={<Customer />} />
       <Route path="/customer/add" element={<CustomerAdd />} /> 
       <Route path="/deposit" element={<Deposit />} /> 
       <Route path="/deposit/add" element={<DepositAdd />} /> 
       <Route path="/transfer" element={<Transfer />} /> 
       <Route path="/transfer/add" element={<TransferAdd />} /> 
       <Route path="/withdraw" element={<Withdraw/>}/>
       <Route path="/withdraw/add" element={<WithdrawAdd/>}/>
       <Route path="/statement" element={<Statement/>}/>
       <Route path="/statement/list" element={< StatementList/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
