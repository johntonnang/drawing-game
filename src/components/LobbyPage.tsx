import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import star from '../star.svg'

const LobbyPage = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const URLroomId = searchParams.get('roomId')
  console.log(URLroomId)
  const handleStartGame = () => {
    console.log('Spelet har startats')
    window.location.href = '/draw'
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
      for (const i in newData) {
        if (URLroomId === newData[i].roomId) {
          setPlayers(newData[i].players)
          setRoomId(newData[i].roomId)
        }
      }
      console.log(newData[0].roomId)
    })
  }

  useEffect(() => {
    fetchPost()
    if (!roomId) {
      console.log('No roomId provided.')
      return
    }
    const roomRef = doc(db, 'Rooms', roomId)

    onSnapshot(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const roomData = snapshot.data()
        console.log('Room Data:', roomData)
        setPlayers(roomData.players)
      } else {
        console.log('Room does not exist.')
      }
    })
  }, [roomId])

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center font-gloria text-white">
        <div className="mt-20 flex w-full flex-col items-center">
          <h1 className="mb-4 text-4xl font-bold">Lobby</h1>
          <div className="flex w-4/5 flex-row gap-10">
            <div className="h-[20rem] w-[20rem] rounded-2xl bg-blue">
              <h2 className="my-2 flex justify-center text-lg font-medium">
                Players
              </h2>
              <ul className="mb-4 px-3 py-2">
                {players.map((player, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="mr-2">{player.name}</span>
                    {player.name === localStorage.getItem('userName') ? (
                      <img src={star} alt="Star" className="h-5 w-5" />
                    ) : (
                      <></>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[20rem] w-[20rem] rounded-2xl bg-blue">
              <h2 className="my-2 flex justify-center text-lg font-medium">
                Game ID
              </h2>
              <p className="mb-4 px-3 py-2">{roomId}</p>
              <div className="flex h-full w-full items-center justify-center">
                <button
                  className="rounded-md bg-green px-4 py-2 text-white"
                  onClick={handleStartGame}
                >
                  Start game
                </button>
              </div>
            </div>
            <div className="h-[20rem] w-[20rem] rounded-2xl bg-blue">
              <h2 className="my-2 flex justify-center text-lg font-medium">
                Rules
              </h2>
              <ul className=" mb-4 px-3 py-2">
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
