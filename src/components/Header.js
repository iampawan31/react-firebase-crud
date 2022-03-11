import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ refreshTable }) => {
  return (
    <div className="w-full md:w-auto inline-flex bg-opacity-50 bg-purple-dark px-8 py-4 rounded-xl shadow mb-10">
      <Link
        className="bg-blue w-full md:w-auto px-4 py-1 text-white rounded-l-xl"
        to="/users/new"
      >
        Add User
      </Link>
      <button
        className="bg-yellow w-full md:w-auto px-4 py-1 text-black rounded-r-xl"
        onClick={refreshTable}
      >
        Refresh Table
      </button>
    </div>
  )
}

export default Header
