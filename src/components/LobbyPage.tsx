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
      <div className="flex flex-col items-center min-h-screen text-white font-gloria w-full">
        <div className="flex flex-col w-full mt-20 items-center">
          <h1 className="text-4xl font-bold mb-4">Lobby</h1>
          <div className="flex flex-row w-4/5 gap-10">
            <div className="w-[20rem] h-[20rem] rounded-2xl bg-blue">
              <h2 className="flex text-lg font-medium my-2 justify-center">
                Players
              </h2>
              <ul className="px-3 py-2 mb-4">
                {players.map((player, index) => (
                  <li key={index} className="mb-2">
                    {player.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[20rem] h-[20rem] rounded-2xl bg-blue">
              <h2 className="flex text-lg font-medium my-2 justify-center">
                Game ID
              </h2>
              <p className="px-3 py-2 mb-4">{roomId}</p>
              <div className="flex h-full justify-center items-center w-full">
                <button
                  className="bg-green text-white px-4 py-2 rounded-md"
                  onClick={handleStartGame}
                >
                  Start game
                </button>
              </div>
            </div>
            <div className="w-[20rem] h-[20rem] rounded-2xl bg-blue">
              <h2 className="flex text-lg font-medium my-2 justify-center">
                Rules
              </h2>
              <ul className=" px-3 py-2 mb-4">
                <li>Time each round: 90 seconds</li>
                <li>Rounds: 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LobbyPage
