import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase-config'

const AddUser = ({ handleClose }) => {
  const usersCollectionRef = collection(db, 'users')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')

  const saveNewUser = async () => {
    await addDoc(usersCollectionRef, {
      firstName,
      lastName,
      email,
      age,
      gender,
      bloodGroup,
    })
  }

  return (
    <div className="bg-purple text-white h-screen">
      <div className="container px-4 mx-auto">
        <div className="min-h-full flex flex-col items-center justify-center">
          <div className="w-full max-w-xl bg-purple-dark mt-10 px-6 py-4 rounded-lg shadow-lg">
            <div className="text-center text-2xl font-bold mb-4">
              Add New user
            </div>
            <div className="mb-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-white"
              >
                First Name
              </label>
              <input
                name="firstName"
                autoComplete="off"
                className="border block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="John"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-white"
              >
                Last Name
              </label>
              <input
                name="lastName"
                autoComplete="off"
                className="border block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                name="email"
                autoComplete="off"
                className="block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="john@doe.com"
              />
            </div>
            <div className="mb-3">
              <div className="flex items-center">
                <input
                  id="male"
                  name="push-notifications"
                  type="radio"
                  onChange={() => setGender('Male')}
                  className="focus:ring-blue h-4 w-4 text-blue border-gray-300"
                />
                <label
                  htmlFor="male"
                  className="ml-3 block text-sm font-medium text-white"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="female"
                  name="push-notifications"
                  type="radio"
                  onChange={() => setGender('Female')}
                  className="focus:ring-blue h-4 w-4 text-blue border-gray-300"
                />
                <label
                  htmlFor="female"
                  className="ml-3 block text-sm font-medium text-white"
                >
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label>Blood Group</label>
              <select
                onChange={(e) => setBloodGroup(e.target.value)}
                className="block w-full px-4 py-2 text-lg rounded-md text-black"
                aria-label="Select blood group type"
              >
                <option disabled selected>
                  Blood Group
                </option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={saveNewUser}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
          <Link
            className="w-full md:w-auto px-4 py-1 text-white text-xl rounded-xl"
            to="/"
          >
            &larr; Add User
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddUser
