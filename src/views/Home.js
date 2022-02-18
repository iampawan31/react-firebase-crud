import { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import DeleteUser from '../components/DeleteUser'
import Users from '../components/Users'
import Header from '../components/Header'

const Home = () => {
  const [users, setUsers] = useState([])
  const [tableColumns, setTableColumns] = useState([])
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false)

  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      const usersData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setUsers(usersData)
      setTableColumns(Object.keys(usersData[0]))
    }

    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="bg-purple h-full min-h-screen pb-20 md:pb-32">
      <div className="container px-4 mx-auto py-10 md:py-20">
        <Header />
        <Users
          tableColumns={tableColumns}
          users={users}
          setShowDeleteUserModal={() => setShowDeleteUserModal(true)}
        />
        {/* <DeleteUser
      show={showDeleteUserModal}
      handleClose={() => setShowDeleteUserModal(false)}
    /> */}
      </div>
    </div>
  )
}

export default Home
