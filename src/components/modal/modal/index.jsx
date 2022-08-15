import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalComponent({ open, children, handleClose }) {
  if (!open) return null;


  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an employee:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" id="inputName"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Occupation:</label>
            <input type="text" className="form-control" id="inputOccupation"/>
          </div>

          <div className="mb-3">
            <label className="form-label">Tribe:</label>
            <select className="form-select">
              <option value="1">Rigas</option>
              <option value="2">Billing</option>
              <option value="3">Internstellar</option>
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

