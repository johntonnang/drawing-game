import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Footer from './Footer'
import { useState, useEffect } from 'react'

function JoinPage() {
  const [roomId, setRoomId] = useState('')

  const fetchPost = async () => {
    await getDocs(collection(db, 'Rooms')).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        players: doc.data().players,
        roomId: doc.data().roomId,
      }))
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])
  const [userName, setUserName] = useState('')
  const [id, setId] = useState('')

  const handleSaveAndNavigate = async () => {
    await getDocs(collection(db, 'Rooms')).then(async (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        players: doc.data().players,
        roomId: doc.data().roomId,
      }))
      for (const i in newData) {
        if (id === newData[i].roomId) {
          setRoomId(newData[i].roomId)
          const roomRef = doc(db, 'Rooms', newData[i].roomId)
          console.log(newData[i].roomId)
          const roomSnapshot = await getDoc(roomRef)

          if (roomSnapshot.exists()) {
            const roomData = roomSnapshot.data()
            const updatedPlayers = [
              ...roomData.players,
              { name: userName, leader: false },
            ]
            await updateDoc(roomRef, { players: updatedPlayers })
          } else {
            console.error('Room document does not exist.')
          }
          localStorage.setItem('userName', userName)
          window.location.href = '/lobby/?roomId=' + newData[i].roomId
        }
      }
    })
    console.log(roomId)
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
            className="mt-4 w-full rounded-2xl bg-orange px-4 py-4 font-gloria text-2xl"
            onClick={handleSaveAndNavigate}
          >
            Join
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JoinPage
