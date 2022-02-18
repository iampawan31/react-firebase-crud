import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import AddUser from './views/AddUser'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
    </Routes>
  )
}

export default App
