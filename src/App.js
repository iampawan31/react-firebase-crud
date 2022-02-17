import { useEffect, useState } from 'react'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const App = () => {
  const [users, setUsers] = useState([])

  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data.docs)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  return <div className="App"></div>
}

export default App
