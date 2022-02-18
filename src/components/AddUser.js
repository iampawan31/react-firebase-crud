import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const AddUser = ({ show, handleClose }) => {
  const saveNewUser = () => {}
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="john@doe.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <br />
            <Form.Check
              inline
              label="Male"
              name="group1"
              type="radio"
              id={`inline-radio-1`}
            />
            <Form.Check
              inline
              label="Female"
              name="group1"
              type="radio"
              id={`inline-radio-2`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Blood Group</Form.Label>
            <Form.Select aria-label="Select blood group type">
              <option value="O-">O-</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="A+">A+</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="AB-">AB-</option>
              <option value="AB+">AB+</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveNewUser}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddUser
