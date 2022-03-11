import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import AddUser from './views/AddUser'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const loaderRef = useRef(null)

  const startLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.continuousStart(0, 500)
    }
  }

  const completeLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.complete()
    }
  }
  return (
    <div>
      <LoadingBar color="#1b74e4" height={5} shadow ref={loaderRef} />
      <Routes>
        <Route
          path="/"
          element={
            <Home startLoader={startLoader} completeLoader={completeLoader} />
          }
        />
        <Route
          path="/users/new"
          element={
            <AddUser
              startLoader={startLoader}
              completeLoader={completeLoader}
            />
          }
        />
        <Route
          path="/users/edit/:userId"
          element={
            <AddUser
              startLoader={startLoader}
              completeLoader={completeLoader}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
