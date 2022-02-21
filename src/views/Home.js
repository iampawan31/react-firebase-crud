import { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Users from '../components/Users'
import Header from '../components/Header'
import Loader from '../components/Loader'

const Home = ({ startLoader, completeLoader }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [tableColumns, setTableColumns] = useState([])

  const usersCollectionRef = collection(db, 'users')
  const getUsers = async () => {
    setLoading(true)
    startLoader()
    const data = await getDocs(usersCollectionRef)
    const usersData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setUsers(usersData)
    setTableColumns(Object.keys(usersData[0]))
    completeLoader()
    setLoading(false)
  }

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="bg-purple h-full min-h-screen pb-20 md:pb-32">
      <div className="container px-4 mx-auto py-10 md:py-20">
        <Header refreshTable={() => getUsers()} />
        {loading ? (
          <Loader />
        ) : (
          <Users
            tableColumns={tableColumns}
            getUpdatedUsers={getUsers}
            users={users}
          />
        )}
      </div>
    </div>
  )
}

export default Home
