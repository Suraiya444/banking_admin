import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function StatementList() {
    const [accountNumber, setAccountNumber] = useState(''); // State to hold the account number input
    const [customerData, setCustomerData] = useState(null); // State to hold customer data

    // Static customer data for demonstration
    const staticCustomerData = {
        name: 'Kamal',
        father_name: 'Jamal',
        address: '2no Gate',
        account_no: '123456',
        account_type: 'Savings',
        opening_date: '12/01/2024',
        customer_id: '4654654',
        contact_no: '029965656',
    };

    const handleAccountNumberChange = (event) => {
        setAccountNumber(event.target.value); // Update state with the inputted account number
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate fetching data based on the account number
        // Here we're using static data, so we can just check if the account number matches
        if (accountNumber === staticCustomerData.account_no) {
            setCustomerData(staticCustomerData); // Set customer data to static data
        } else {
            setCustomerData(null); // Reset data if account number doesn't match
        }
    };

    return (
        <AdminLayout>
            <div className="page-wrapper">
                <div className='row'>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title m-b-0">Bank Statement</h5>
                            </div>

                            {/* Form to input account number */}
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 text-right control-label col-form-label">Account Number</label>
                                        <div className="col-sm-9">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={accountNumber} 
                                                onChange={handleAccountNumberChange} 
                                                placeholder="Enter Account Number" 
                                            />
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Get Statement</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Show customer data if available */}
                            {customerData && (
                                <div className="card-body">
                                    <div className="col-10">
                                        <p style={{ color: '#7e8d9f', fontSize: '20px' }}>
                                            Account <strong>{customerData.account_no}</strong>
                                        </p>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="text-muted pl-3">
                                            <strong style={{ color: 'black' }}>Name:</strong>
                                            <strong style={{ color: 'black', fontSize: '17px' }}> {customerData.name}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Father's Name:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.father_name}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Address:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.address}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Account:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.account_no}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Account Type:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.account_type}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Opening Date:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.opening_date}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <strong style={{ color: 'black' }}>Customer ID:</strong>
                                            <strong style={{ color: 'black' }}> {customerData.customer_id}</strong>
                                        </li>
                                        <li className="text-muted pl-3 mt-2">
                                            <i className="fas fa-phone"></i>
                                            <strong style={{ color: 'black' }}> {customerData.contact_no}</strong>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {/* Display message if no data available */}
                            {!customerData && accountNumber && (
                                <div className="card-body text-danger">
                                    <strong>Account not found.</strong>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"></div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default StatementList;
