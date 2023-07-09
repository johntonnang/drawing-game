import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react'
import Footer from './Footer'

const LobbyPage = () => {
  const handleStartGame = () => {
    console.log('Spelet har startats')
  }

  const [players, setPlayers] = useState<
    {
      name: string
      id: string
    }[]
  >([])
  const [roomId, setRoomId] = useState('')
  const fetchPost = async () => {
    await getDocs(collection(db, 'Rooms')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        players: doc.data().players,
        roomId: doc.data().roomId,
      }))
      console.log(newData[0].roomId)
      setPlayers(newData[0].players)
      setRoomId(newData[0].roomId)
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Lobby</h1>
        <div className="flex flex-row w-4/5 space-x-4">
          <div className="w-1/3">
            <h2 className="text-lg font-medium mb-2">Spelare</h2>
            <ul className="border border-gray-300 px-3 py-2 rounded-md mb-4">
              {players.map((player, index) => (
                <li key={index} className="mb-2">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-medium mb-2">Spel-ID</h2>
            <p className="border border-gray-300 px-3 py-2 rounded-md mb-4">
              {roomId}
            </p>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-medium mb-2">Spelregler</h2>
            <ul className="border border-gray-300 px-3 py-2 rounded-md mb-4">
              <li>Tid: 10 minuter</li>
              <li>Antal rundor: 3</li>
            </ul>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleStartGame}
        >
          Starta spelet
        </button>
      </div>
      <Footer />
    </>
  )
}

export default LobbyPage
