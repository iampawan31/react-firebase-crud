import React from 'react'
import User from './User'

const Users = ({ users, setShowDeleteUserModal, getUpdatedUsers }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      {users &&
        users.map((user, index) => (
          <User
            key={index}
            user={user}
            getUpdatedUsers={getUpdatedUsers}
            setShowDeleteUserModal={setShowDeleteUserModal}
          />
        ))}
    </div>
  )
}

export default Users
