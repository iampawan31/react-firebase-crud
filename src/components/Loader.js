import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className=" w-full max-w-sm rounded-xl shadow-xl bg-black bg-opacity-50 text-3xl font-bold text-center py-10 text-white">
        Loading...
      </div>
    </div>
  )
}

export default Loader
