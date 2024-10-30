import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { Link} from 'react-router-dom';

function LoanPaymentAdd() {
    const [inputs, setInputs] = useState({
        id: '',
        customer_id: '',
        loan_id: '',
        customer_account_id: '',
        payment_number: '',
        balance: '',
        principal_amount: '',
        interest_rate: '',
        payment_term: '', // Payment term in months
        amount: '', // Calculated monthly payment
        expected_date: '',
        pay_date: '',
        status: '',
    });

    const [loan, setLoan] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [customer_account, setCustomerAccount] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    const getDatas = async () => {
        const response = await axios.get(`/loan_payment/${id}`);
        setInputs(response.data.data);
    };

    const getBanks = async () => {
        const response = await axios.get(`/loan`);
        setLoan(response.data.data);
        const res = await axios.get(`/customer`);
        setCustomer(res.data.data);
        const respon = await axios.get(`/customer_account`);
        setCustomerAccount(respon.data.data);
    };

    useEffect(() => {
        if (id) {
            getDatas();
        }
        getBanks();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const calculateMonthlyPayment = () => {
        const principal = parseFloat(inputs.principal_amount) || 0;
        const interestRate = parseFloat(inputs.interest_rate) / 100 / 12; // Monthly interest rate
        const paymentTerm = parseFloat(inputs.payment_term) || 0; // Number of months

        if (paymentTerm === 0) return 0; // Avoid division by zero

        const monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -paymentTerm));
        return monthlyPayment.toFixed(2); // Return formatted to two decimal places
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calculatedPayment = calculateMonthlyPayment();
        const paymentData = { ...inputs, amount: calculatedPayment };

        try {
            const apiUrl = inputs.id ? `/loan_payment/${inputs.id}?_method=put` : `/loan_payment`;
            const res = await axios.post(apiUrl, paymentData);
            console.log(res);
            navigate('/loan_payment');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Loan Payment</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={'/loan_payment'} className='btn btn-primary float-right' >Loan Payment List</Link></li>
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
                                        <h4 className="card-title">Loan Payment</h4>
                                        {/* Loan Selection */}
                                        <div className="form-group row">
                                            <label htmlFor="loan_id" className="col-sm-3 text-right control-label col-form-label">Loan</label>
                                            <div className="col-sm-9">
                                                {loan.length > 0 && (
                                                    <select className="form-control" id="loan_id" name="loan_id" value={inputs.loan_id} onChange={handleChange}>
                                                        <option value="">Select Loan</option>
                                                        {loan.map((d) => (
                                                            <option key={d.id} value={d.id}>{d.id}</option>
                                                        ))}
                                                    </select>
                                                )}
                                            </div>
                                        </div>
                                        {/* Customer Selection */}
                                        <div className="form-group row">
                                            <label htmlFor="customer_id" className="col-sm-3 text-right control-label col-form-label">Customer Name</label>
                                            <div className="col-sm-9">
                                                {customer.length > 0 && (
                                                    <select className="form-control" id="customer_id" name="customer_id" value={inputs.customer_id} onChange={handleChange}>
                                                        <option value="">Select Customer</option>
                                                        {customer.map((d) => (
                                                            <option key={d.id} value={d.id}>{d.name}</option>
                                                        ))}
                                                    </select>
                                                )}
                                            </div>
                                        </div>
                                        {/* Customer Account No Selection */}
                                        <div className="form-group row">
                                            <label htmlFor="customer_account_id" className="col-sm-3 text-right control-label col-form-label">Customer Account No</label>
                                            <div className="col-sm-9">
                                                {customer_account.length > 0 && (
                                                    <select className="form-control" id="customer_account_id" name="customer_account_id" value={inputs.customer_account_id} onChange={handleChange}>
                                                        <option value="">Select Account No</option>
                                                        {customer_account.map((d) => (
                                                            <option key={d.id} value={d.id}>{d.account_no}</option>
                                                        ))}
                                                    </select>
                                                )}
                                            </div>
                                        </div>
                                        {/* Payment Number */}
                                        <div className="form-group row">
                                            <label htmlFor="payment_number" className="col-sm-3 text-right control-label col-form-label">Payment Number</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="payment_number" name="payment_number" value={inputs.payment_number} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Balance */}
                                        <div className="form-group row">
                                            <label htmlFor="balance" className="col-sm-3 text-right control-label col-form-label">Balance</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="balance" name="balance" value={inputs.balance} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Principal Amount */}
                                        <div className="form-group row">
                                            <label htmlFor="principal_amount" className="col-sm-3 text-right control-label col-form-label">Principal Amount</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" id="principal_amount" name="principal_amount" value={inputs.principal_amount} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Interest Rate */}
                                        <div className="form-group row">
                                            <label htmlFor="interest_rate" className="col-sm-3 text-right control-label col-form-label">Interest Rate (%)</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" id="interest_rate" name="interest_rate" value={inputs.interest_rate} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Payment Term */}
                                        <div className="form-group row">
                                            <label htmlFor="payment_term" className="col-sm-3 text-right control-label col-form-label">Payment Term (Months)</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" id="payment_term" name="payment_term" value={inputs.payment_term} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Expected Date */}
                                        <div className="form-group row">
                                            <label htmlFor="expected_date" className="col-sm-3 text-right control-label col-form-label">Expected Date</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" id="expected_date" name="expected_date" value={inputs.expected_date} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Payment Date */}
                                        <div className="form-group row">
                                            <label htmlFor="pay_date" className="col-sm-3 text-right control-label col-form-label">Payment Date</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" id="pay_date" name="pay_date" value={inputs.pay_date} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Status */}
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-3 text-right control-label col-form-label">Status</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="status" name="status" value={inputs.status} onChange={handleChange} />
                                            </div>
                                        </div>
                                        {/* Calculated Monthly Payment */}
                                        <div className="form-group row">
                                            <label className="col-sm-3 text-right control-label col-form-label">Calculated Monthly Payment</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" readOnly value={calculateMonthlyPayment()} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top">
                                        <div className="card-body">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default LoanPaymentAdd;
