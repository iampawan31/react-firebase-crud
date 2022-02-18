import React from 'react'

const DeleteUser = ({ show, handleClose }) => {
  const saveNewUser = () => {}
  return (
    <div show={show} onHide={handleClose}>
      <div closeButton>
        <div>Delete User</div>
      </div>
      <div>You want to delete user?</div>
      <div>
        <button variant="danger" onClick={handleClose}>
          No
        </button>
        <button variant="primary" onClick={saveNewUser}>
          Yes
        </button>
      </div>
    </div>
  )
}

export default DeleteUser
