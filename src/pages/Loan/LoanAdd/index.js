import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Loan() {
    const [inputs, setInputs] = useState({
        id: '', 
        name: '', 
        contact_no: '', 
        loan_start_date: '', 
        term_length: '', 
        interest_rate: '', 
        principal_amount: '', 
        loan_permission: false,
    });

    const [showLoanDetails, setShowLoanDetails] = useState(false);
    const [calculatedValues, setCalculatedValues] = useState(null); // For storing calculated values
    const navigate = useNavigate();
    const { id } = useParams();
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    };

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/bank/${id}`, config).then(function (response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setInputs(values => ({ 
            ...values, 
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform calculations based on input values
        const principal = parseFloat(inputs.principal_amount);
        const interestRate = parseFloat(inputs.interest_rate) / 100 / 12;
        const termLength = parseInt(inputs.term_length) * 12; // Assuming term is in years

        const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -termLength));
        const totalPayment = monthlyPayment * termLength;
        const totalInterest = totalPayment - principal;

        // Set calculated values to be displayed in the table
        setCalculatedValues({
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
        });

        try {
            let apiurl = 'REACT_APP_API_URL';
            let method = '';
            if (inputs.id !== '') {
                method = 'put';
                apiurl = `/bank/${inputs.id}`;
            } else {
                method = 'post';
                apiurl = `/bank`;
            }

            await axios({
                method: method,
                responseType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs,
                headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
            });
            navigate('/bank');
        } catch (e) {
            console.log(e);
        }
    };

    const handleNameClick = () => {
        setShowLoanDetails(!showLoanDetails);
    };

    return (
        <AdminLayout>
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Loan</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Loan</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Customer</label>
                                            <div className="col-sm-9">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="name" 
                                                    name="name" 
                                                    value={inputs.name} 
                                                    onClick={handleNameClick} 
                                                    readOnly 
                                                />
                                            </div>
                                        </div>

                                        {showLoanDetails && (
                                            <>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 text-right control-label col-form-label">Customer Account</label>
                                                    <div className="col-sm-9">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="contact_no" 
                                                            value={inputs.contact_no} 
                                                            onChange={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 text-right control-label col-form-label">Starting Date</label>
                                                    <div className="col-sm-9">
                                                        <input 
                                                            type="date" 
                                                            className="form-control" 
                                                            name="loan_start_date" 
                                                            value={inputs.loan_start_date} 
                                                            onChange={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 text-right control-label col-form-label">Term Length (in years)</label>
                                                    <div className="col-sm-9">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="term_length" 
                                                            value={inputs.term_length} 
                                                            onChange={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 text-right control-label col-form-label">Interest Rate (%)</label>
                                                    <div className="col-sm-9">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="interest_rate" 
                                                            value={inputs.interest_rate} 
                                                            onChange={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-3 text-right control-label col-form-label">Principal Amount</label>
                                                    <div className="col-sm-9">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="principal_amount" 
                                                            value={inputs.principal_amount} 
                                                            onChange={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>

                                {/* Show calculated values if available */}
                                {calculatedValues && (
                                    <div className="card-body">
                                        <h4 className="card-title">Loan</h4>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Monthly Payment</th>
                                                    <th>Principal</th>
                                                    <th>Total Payment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{calculatedValues.monthlyPayment}</td>
                                                    <td>{calculatedValues.totalPayment}</td>
                                                    <td>{calculatedValues.totalInterest}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* Loan Permission checkbox shown after calculation */}
                                        <div className="form-group row mt-4">
                                            <label className="col-sm-3 text-right control-label col-form-label">Loan Permission</label>
                                            <div className="col-sm-9">
                                                <input 
                                                    type="checkbox" 
                                                    name="loan_permission" 
                                                    checked={inputs.loan_permission} 
                                                    onChange={handleChange} 
                                                /> Allow loan?
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Loan;
