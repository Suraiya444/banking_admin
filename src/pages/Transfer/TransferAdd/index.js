import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function TransferAdd() {
  const [formData, setFormData] = useState({
    sourceAccountNumber: '',
    sourceAccountTitle: '',
    sourceAccountType: '',
    sourceBranch: '',
    transferDate: '',
    transferAmount: '',
    destinationAccountNumber: '',
    destinationAccountTitle: '',
    destinationAccountType: '',
    destinationBranch: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the modal when form is submitted
  };

  const handleClose = () => setShowModal(false);

  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">Transfer</h4>
              <div className="ml-auto text-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Transfer</li>
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
                    <h4 className="card-title">Source Account</h4>
                    <div className="form-group row">
                      <label htmlFor="sourceAccountNumber" className="col-sm-3 text-right control-label col-form-label">Account Number</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sourceAccountNumber"
                          name="sourceAccountNumber"
                          placeholder="Account No"
                          value={formData.sourceAccountNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="sourceAccountTitle" className="col-sm-3 text-right control-label col-form-label">Account Title</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sourceAccountTitle"
                          name="sourceAccountTitle"
                          placeholder="Title"
                          value={formData.sourceAccountTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group row">
                      <label htmlFor="sourceBranch" className="col-sm-3 text-right control-label col-form-label">Branch</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="sourceBranch"
                          name="sourceBranch"
                          placeholder="Branch"
                          value={formData.sourceBranch}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="transferDate" className="col-sm-3 text-right control-label col-form-label">Date</label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control"
                          id="transferDate"
                          name="transferDate"
                          value={formData.transferDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="transferAmount" className="col-sm-3 text-right control-label col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          id="transferAmount"
                          name="transferAmount"
                          placeholder="Amount"
                          value={formData.transferAmount}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <h4 className="card-title">Destination Account</h4>
                    <div className="form-group row">
                      <label htmlFor="destinationAccountNumber" className="col-sm-3 text-right control-label col-form-label">Account Number</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="destinationAccountNumber"
                          name="destinationAccountNumber"
                          placeholder="Account No"
                          value={formData.destinationAccountNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="destinationAccountTitle" className="col-sm-3 text-right control-label col-form-label">Account Title</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="destinationAccountTitle"
                          name="destinationAccountTitle"
                          placeholder="Title"
                          value={formData.destinationAccountTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                   
                    <div className="form-group row">
                      <label htmlFor="destinationBranch" className="col-sm-3 text-right control-label col-form-label">Branch</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="destinationBranch"
                          name="destinationBranch"
                          placeholder="Branch"
                          value={formData.destinationBranch}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-top">
                    <div className="card-body">
                      <button type="submit" className="custom-btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Modal for Transfer Receipt */}
        {showModal && (
          <div className="custom-modal pl-4" style={{border:" solid 2px",height:"4300px"}}>
            <div className="custom-modal-content">
              <span className="custom-close" onClick={handleClose}>&times;</span>
              <h4>Transfer Receipt</h4>
              <div>
                <h5>Transfered from</h5>
                <p>Account Number: {formData.sourceAccountNumber}</p>
                 
                <p>Branch: {formData.sourceBranch}</p>
                <p>Date: {formData.transferDate}</p>
                <p>Amount: ${formData.transferAmount}</p>
              </div>
              <div>
                <h5>Transfered to</h5>
                <p>Account Number: {formData.destinationAccountNumber}</p>
                <p>Account Title: {formData.destinationAccountTitle}</p>
                <p>Account Type: {formData.destinationAccountType}</p>
                <p>Branch: {formData.destinationBranch}</p>
                <p>Amount: ${formData.transferAmount}</p>
              </div>
              <button className="custom-btn" onClick={handleClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default TransferAdd;