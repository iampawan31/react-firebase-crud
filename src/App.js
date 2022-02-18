import { useEffect, useState } from 'react'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  ButtonGroup,
} from 'react-bootstrap'
import _ from 'lodash'
import AddUser from './components/AddUser'

const App = () => {
  const [users, setUsers] = useState([])
  const [tableColumns, setTableColumns] = useState([])
  const [showAddNewUserModal, setShowAddNewUserModal] = useState(false)

  const usersCollectionRef = collection(db, 'users')

  const handleClose = () => {
    setShowAddNewUserModal(false)
  }

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
    <div className="users-container">
      <Container>
        <Row>
          <Col>
            <Button
              onClick={() => setShowAddNewUserModal(true)}
              variant="primary"
            >
              Add User
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped hover size="sm" responsive="md">
              <thead>
                <tr>
                  {tableColumns &&
                    tableColumns.map((c, index) => (
                      <th key={index}>{_.startCase(c)}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.bloodGroup}</td>
                      <td>{user.gender}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        <ButtonGroup className="mb-2">
                          <Button variant="success">Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddUser show={showAddNewUserModal} handleClose={handleClose} />
    </div>
  )
}

export default App
