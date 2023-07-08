import { useState } from 'react'
function JoinView() {
  const [userName, setUserName] = useState('')
  const [id, setId] = useState('')

  const handleSaveAndNavigate = () => {
    window.location.href = '/lobby'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Join a server</h1>
      <div className="w-64">
        <label
          htmlFor="field1"
          className="text-sm font-medium text-gray-700 mb-2"
        >
          Enter username:
        </label>
        <input
          id="field1"
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mt-4 w-64">
        <label
          htmlFor="field2"
          className="text-sm font-medium text-gray-700 mb-2"
        >
          Enter id:
        </label>
        <input
          id="field2"
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleSaveAndNavigate}
      >
        Join
      </button>
    </div>
  )
}

export default JoinView
