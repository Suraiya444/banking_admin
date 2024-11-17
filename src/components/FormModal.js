import React,{useState} from "react";

import Modal from 'react-bootstrap/Modal';

function FormModal({ show,handleClose,handleSubmit, children }){
   return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Deposit </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <form onSubmit={handleSubmit}>
                    {children}
                    <button type="submit" className="btn btn-primary mt-3">Payment</button>
                </form>
            </Modal.Body>
        </Modal> 
   )
}
export default FormModal