import { useState } from 'react'
import Footer from './Footer'
function CreatePage() {
  const [userName, setUserName] = useState('')
  const [id, setId] = useState('')

  const handleSaveAndNavigate = () => {
    window.location.href = '/lobby'
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen text-white">
        <div className="bg-blue p-10 rounded-2xl mb-20">
          <div className="w-64 text-center">
            <label htmlFor="field1" className="text-2xl font-gloria">
              Enter your name:
            </label>
            <input
              id="field1"
              type="text"
              className="mt-4 border border-gray-300 px-3 py-2 rounded-2xl w-full text-black focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mt-4 w-64 text-center">
            <label htmlFor="field2" className="text-2xl font-gloria mb-2">
              Enter lobby id:
            </label>
            <input
              id="field2"
              type="text"
              className="mt-4 border border-gray-300 px-3 py-2 rounded-2xl w-full text-black focus:outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button
            className="bg-green font-gloria text-2xl px-4 py-4 rounded-2xl w-full mt-4"
            onClick={handleSaveAndNavigate}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreatePage
