import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { db } from '../firebase-config'

const AddUser = ({ startLoader, completeLoader }) => {
  let urlParams = useParams()
  let navigate = useNavigate()

  const usersCollectionRef = collection(db, 'users')
  const [userId, setUserId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')

  const saveNewUser = async () => {
    startLoader()
    await addDoc(usersCollectionRef, {
      firstName,
      lastName,
      age,
      gender,
      bloodGroup,
      city,
      country,
      email,
    }).then(() => {
      completeLoader()
      navigate('/')
    })
  }

  const updateUser = async () => {
    startLoader()
    const docRef = doc(db, 'users', userId)
    const newFields = {
      firstName,
      lastName,
      age,
      gender,
      bloodGroup,
      city,
      country,
      email,
    }
    await updateDoc(docRef, newFields).then(() => {
      completeLoader()
      navigate('/')
    })
  }

  const processForm = async () => {
    if (userId) {
      await updateUser()
    } else {
      await saveNewUser()
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      const { userId } = urlParams

      if (userId) {
        startLoader()
        const docRef = doc(db, 'users', userId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUserId(userId)
          const {
            firstName,
            lastName,
            email,
            age,
            gender,
            bloodGroup,
            city,
            country,
          } = docSnap.data()
          setFirstName(firstName)
          setLastName(lastName)
          setEmail(email)
          setAge(age)
          setGender(gender)
          setBloodGroup(bloodGroup)
          setCity(city)
          setCountry(country)
          console.log(docSnap.data(), 35)
          completeLoader()
        }
      }
    }

    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlParams])

  return (
    <div className="bg-purple text-white min-h-screen h-full">
      <div className="container px-4 mx-auto">
        <div className="min-h-screen h-full flex flex-col items-center justify-center">
          <div className="w-full max-w-xl bg-purple-dark mt-10 px-6 py-4 rounded-lg shadow-lg">
            <div className="text-center text-2xl font-bold mb-4">
              {userId ? 'Update User' : 'Add New user'}
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
                value={firstName}
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
                value={lastName}
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
                value={email}
                autoComplete="off"
                className="block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="john@doe.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-white"
              >
                City
              </label>
              <input
                name="city"
                value={city}
                autoComplete="off"
                className="border block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="new delhi"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-white"
              >
                Country
              </label>
              <input
                name="country"
                value={country}
                autoComplete="off"
                className="border block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                placeholder="India"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-white"
              >
                Age
              </label>
              <input
                name="age"
                value={age}
                autoComplete="off"
                className="block w-full px-4 py-2 text-lg rounded-md text-black"
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="age"
              />
            </div>
            <div className="mb-3">
              <div className="block text-sm font-medium text-white">Gender</div>
              <div className="flex items-center">
                <input
                  id="male"
                  name="push-notifications"
                  type="radio"
                  value="Male"
                  checked={gender.toLowerCase() === 'male'}
                  onChange={() => setGender('male')}
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
                  value="Female"
                  checked={gender.toLowerCase() === 'female'}
                  onChange={() => setGender('female')}
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
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="block w-full px-4 py-2 text-lg rounded-md text-black"
                aria-label="Select blood group type"
              >
                <option value="" disabled>
                  Select Bloodgroup
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
                onClick={processForm}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {userId ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
          <Link
            className="w-full md:w-auto px-4 py-1 text-white text-xl rounded-xl"
            to="/"
          >
            &larr; Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddUser
