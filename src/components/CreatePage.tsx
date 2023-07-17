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
      <div className="flex h-screen w-full flex-col items-center justify-center text-white">
        <div className="mb-20 rounded-2xl bg-blue p-10">
          <div className="w-64 text-center">
            <label htmlFor="field1" className="font-gloria text-2xl">
              Enter your name:
            </label>
            <input
              id="field1"
              type="text"
              className="border-gray-300 mt-4 w-full rounded-2xl border px-3 py-2 text-black focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mt-4 w-64 text-center">
            <label htmlFor="field2" className="mb-2 font-gloria text-2xl">
              Enter lobby id:
            </label>
            <input
              id="field2"
              type="text"
              className="border-gray-300 mt-4 w-full rounded-2xl border px-3 py-2 text-black focus:outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button
            className="mt-4 w-full rounded-2xl bg-green px-4 py-4 font-gloria text-2xl"
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
