import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'
import Footer from './Footer'

function CreatePage() {
  const [userName, setUserName] = useState('')

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000)
    const formattedNumber = randomNumber.toString().padStart(6, '0')
    return formattedNumber
  }
  const [roomId] = useState(generateRandomNumber())
  const handleSaveAndNavigate = async () => {
    console.log(roomId)
    const roomRef = doc(db, 'Rooms', roomId)

    try {
      await setDoc(roomRef, {
        players: [{ name: userName, leader: true }],
        roomId: roomId,
      })
      localStorage.setItem('userName', userName)
      window.location.href = '/lobby/?roomId=' + roomId
    } catch (error) {
      console.error('Error updating or creating document:', error)
    }
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
