import React from 'react'
import User from './User'

const Users = ({ users, setShowDeleteUserModal }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {users &&
        users.map((user, index) => (
          <User
            key={index}
            user={user}
            setShowDeleteUserModal={setShowDeleteUserModal}
          />
        ))}
    </div>
  )
}

export default Users
