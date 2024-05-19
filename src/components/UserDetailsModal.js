import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function UserDetailsModal({ user, show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Personal Information</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        
        <h4>Address</h4>
        <p><strong>Street:</strong> {user.address?.street}</p>
        <p><strong>Suite:</strong> {user.address?.suite}</p>
        <p><strong>City:</strong> {user.address?.city}</p>
        <p><strong>Zipcode:</strong> {user.address?.zipcode}</p>

        <h4>Company</h4>
        <p><strong>Name:</strong> {user.company?.name}</p>
        <p><strong>Catch Phrase:</strong> {user.company?.catchPhrase}</p>
        <p><strong>BS:</strong> {user.company?.bs}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserDetailsModal;
