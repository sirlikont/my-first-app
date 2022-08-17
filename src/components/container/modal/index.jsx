import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default function ModalComponent({ formik }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (

    <>

    <button type="button" className="btn btn-dark float-end" onClick={handleShow}>
      + Employee
    </button>
    
    <Modal show={show} onHide={handleClose}>
    <form onSubmit={ formik.handleSubmit }>

      <Modal.Header closeButton>
        <Modal.Title>Add an employee:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name='name' value={formik.values.name} onChange={formik.handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Occupation:</label>
            <input type="text" className="form-control" id="title"  name='title' value={formik.values.title} onChange={formik.handleChange}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Tribe:</label>
            <select className="form-select" id="tribe" name="tribe" value={formik.values.tribe} onChange={ (e) => formik.setFieldValue('tribe', e.target.value)} >
              <option value="1">Rigas</option>
              <option value="2">Billing</option>
              <option value="3">Internstellar</option>
            </select>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type='submit' variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
    </>
  );
}

