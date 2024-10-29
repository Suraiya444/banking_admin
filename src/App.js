import * as React from 'react';

import Dashboard from './pages/Dashboard';

 import DistrictAdd from './pages/District/DistrictAdd';
 import District from './pages/District';

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

 import BankAdd from './pages/Bank/BankAdd';
 import Bank from './pages/Bank';

 import Account_type from './pages/Account_type';
 import Account_typeAdd from './pages/Account_type/AccountTypeAdd';

 import BankBranchAdd from './pages/BankBranch/BankBranchAdd';
 import BankBranch from './pages/BankBranch';
import Loan from './pages/Loan';
import LoanAdd from './pages/Loan/LoanAdd';

 import BankserviceAdd from './pages/BankService/BankServiceAdd';
 import BankService from './pages/BankService';

 import CustomerAccount from './pages/CustomerAccount';
 import CustomerAccountAdd from './pages/CustomerAccount/CustomerAccountAdd';

 import CustomerService from './pages/CustomerService';
 import CustomerserviceAdd from './pages/CustomerService/CustomerServiceAdd';

 import Beneficiary from './pages/Banificiary';
 import BanificiaryAdd from './pages/Banificiary/BanificiaryAdd';

 import LoanType from './pages/LoanType';
 import LoanTypeAdd from './pages/LoanType/LoanTypeAdd';

 import CustomerType from './pages/CustomerType';
 import CustomerTypeAdd from './pages/CustomerType/CustomerTypeAdd';

 import LoanPayment from './pages/LoanPayment';
 import LoanPaymentAdd from './pages/LoanPayment/LoanPaymentAdd';

 import Login from './pages/Login';
 import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';

 
function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
   
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={< Login/>}/>
      <Route path="/register" element={< Register/>}/>
      <Route path={"/"} element={
          <Protected isSignedIn={isSignedIn} >
            <Dashboard />
          </Protected>
        } />
        <Route path={"/bank"} element={
          <Protected isSignedIn={isSignedIn} >
            <Bank />
          </Protected>
        } />
         <Route path={"/bank/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankAdd />
          </Protected>
        } />
          <Route path={"/bank/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankAdd />
          </Protected>
        } />
         <Route path={"/district"} element={
          <Protected isSignedIn={isSignedIn} >
            <District />
          </Protected>
        } />
         <Route path={"/district/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DistrictAdd />
          </Protected>
        } />
          <Route path={"/district/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <DistrictAdd />
          </Protected>
        } />
         <Route path={"/bank_branch"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankBranch />
          </Protected>
        } />
         <Route path={"/bank_branch/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankBranchAdd />
          </Protected>
        } />
       <Route path={"/bank_branch/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankBranchAdd />
          </Protected>
        } />
         <Route path={"/bank_service"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankService/>
          </Protected>
        } />
         <Route path={"/bank_service/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankserviceAdd />
          </Protected>
        } />
       <Route path={"/bank_service/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BankserviceAdd />
          </Protected>
        } />

       <Route path={"/customer"} element={
          <Protected isSignedIn={isSignedIn} >
            <Customer />
          </Protected>
        } />
         <Route path={"/customer/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAdd />
          </Protected>
        } />
         <Route path={"/customer/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAdd />
          </Protected>
        } />
        <Route path={"/deposit"} element={
          <Protected isSignedIn={isSignedIn} >
            <Deposit />
          </Protected>
        } />
         <Route path={"/deposit/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <DepositAdd />
          </Protected>
        } />
      <Route path={"/transfer"} element={
          <Protected isSignedIn={isSignedIn} >
            <Transfer />
          </Protected>
        } />
         <Route path={"/transfer/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <TransferAdd />
          </Protected>
        } />
         <Route path={"/withdraw"} element={
          <Protected isSignedIn={isSignedIn} >
            <Withdraw />
          </Protected>
        } />
         <Route path={"/withdraw/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <WithdrawAdd />
          </Protected>
        } />
         <Route path={"/statement"} element={
          <Protected isSignedIn={isSignedIn} >
            <Statement />
          </Protected>
        } />
         <Route path={"/statement/list"} element={
          <Protected isSignedIn={isSignedIn} >
            <StatementList />
          </Protected>
        } />
        <Route path={"/account_type"} element={
          <Protected isSignedIn={isSignedIn} >
            <Account_type />
          </Protected>
        } />
         <Route path={"/account_type/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <Account_typeAdd />
          </Protected>
        } />
         <Route path={"/account_type/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <Account_typeAdd />
          </Protected>
        } />
          <Route path={"/customer_account"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAccount />
          </Protected>
        } />
         <Route path={"/customer_account/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAccountAdd />
          </Protected>
        } />
         <Route path={"/customer_account/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerAccountAdd />
          </Protected>
        } />
        
        <Route path={"/customer_service"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerService />
          </Protected>
        } />
         <Route path={"/customer_service/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerserviceAdd />
          </Protected>
        } />
         <Route path={"/customer_service/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerserviceAdd />
          </Protected>
        } />

        <Route path={"/beneficiary"} element={
          <Protected isSignedIn={isSignedIn} >
            <Beneficiary />
          </Protected>
        } />
         <Route path={"/beneficiary/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <BanificiaryAdd />
          </Protected>
        } />
         <Route path={"/beneficiary/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <BanificiaryAdd />
          </Protected>
        } />

       <Route path={"/loan_type"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanType />
          </Protected>
        } />
         <Route path={"/loan_type/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanTypeAdd />
          </Protected>
        } />
         <Route path={"/loan_type/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanTypeAdd />
          </Protected>
        } />
         <Route path={"/loan/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanAdd />
          </Protected>
        } />
         <Route path={"/loan/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanAdd />
          </Protected>
        } />
         <Route path={"/loan"} element={
          <Protected isSignedIn={isSignedIn} >
            <Loan />
          </Protected>
        } />

       <Route path={"/customer_type/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerTypeAdd />
          </Protected>
        } />
         <Route path={"/customer_type/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerTypeAdd />
          </Protected>
        } />
         <Route path={"/customer_type"} element={
          <Protected isSignedIn={isSignedIn} >
            <CustomerType />
          </Protected>
        } />

        <Route path={"/loan_payment/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanPaymentAdd />
          </Protected>
        } />
         <Route path={"/loan_payment/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanPaymentAdd />
          </Protected>
        } />
         <Route path={"/loan_payment"} element={
          <Protected isSignedIn={isSignedIn} >
            <LoanPayment />
          </Protected>
        } />
        
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
