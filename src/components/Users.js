import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const Users = ({ users, getUpdatedUsers }) => {
  const MySwal = withReactContent(Swal)

  const deleteUser = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, 'users', id))
        getUpdatedUsers()
        MySwal.fire('Deleted!', 'Your file has been deleted.', 'success').then(
          () => {}
        )
      }
    })
  }

  return (
    <table className="bg-purple-dark text-white shadow-lg rounded table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="bg-black border border-gray-light px-1 py-1">ID</th>
          <th className="bg-black border border-gray-light px-1 py-1">
            First Name
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Last Name
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">Email</th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Gender
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">Age</th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Blood Group
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Height
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Weight
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">City</th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Country
          </th>
          <th className="bg-black border border-gray-light px-1 py-1">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user, index) => (
            <tr key={index}>
              <td className="border border-gray-light px-1 py-1 text-right">
                {index + 1}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.firstName}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.lastName}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.email}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.gender}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.age}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.bloodGroup}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.height}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.weight}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.city}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                {user.country}
              </td>
              <td className="border border-gray-light px-1 py-1 text-right">
                <button className="bg-green text-sm text-white px-1 py-1 rounded mr-2 hover:bg-opacity-80 transition">
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red text-sm text-white px-1 py-1 rounded hover:bg-opacity-80 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Users
