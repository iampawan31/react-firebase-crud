import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const User = ({ user, getUpdatedUsers }) => {
  const MySwal = withReactContent(Swal)
  const {
    id,
    firstName,
    lastName,
    age,
    gender,
    bloodGroup,
    email,
    weight,
    height,
    city,
    country,
  } = user

  const deleteUser = () => {
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
    <div className="bg-purple-dark text-white rounded-xl overflow-clipped  shadow-xl">
      <div className="px-8 py-4">
        <div className="inline-flex text-4xl rounded-full p-6 bg-gray-dark shadow">{`${firstName
          .substring(0, 1)
          .toUpperCase()}${lastName.substring(0, 1).toUpperCase()}`}</div>
        <div className="flex flex-col my-6">
          <div className="opacity-50 uppercase font-extralight text-md">
            {email}
          </div>
          <div className="font-semibold pt-2 text-3xl">
            {`${firstName} ${lastName}`}
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Age</span>
            <div className="inline-block">{age}</div>
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Gender</span>
            <div className="inline-block capitalize">{gender}</div>
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Blood Group</span>
            <div className="inline-block capitalize">{bloodGroup}</div>
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Weight(Kg)</span>
            <div className="inline-block capitalize">{weight}</div>
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Height(CM)</span>
            <div className="inline-block capitalize">{height}</div>
          </div>
          <div className="pt-2">
            <span className="opacity-50 uppercase pr-2">Location</span>
            <div className="inline-block capitalize">{`${city}, ${country}`}</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Link
          className="bg-green hover:bg-opacity-80 transition w-full px-4 py-4 rounded-bl-xl text-center"
          to={`/user/edit/${id}`}
        >
          Edit
        </Link>
        <button
          onClick={deleteUser}
          className="bg-red hover:bg-opacity-80 transition w-full px-4 py-4 rounded-br-xl"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default User
