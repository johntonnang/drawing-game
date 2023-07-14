import { Routes, Route } from 'react-router-dom'

import HomeView from './routes/HomeView'
import CreateView from './routes/CreateView'
import JoinView from './routes/JoinView'
import LobbyView from './routes/LobbyView'
import DrawView from './routes/DrawView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/create" element={<CreateView />} />
      <Route path="/join" element={<JoinView />} />
      <Route path="/lobby" element={<LobbyView />} />
      <Route path="/draw" element={<DrawView />} />
    </Routes>
  )
}

export default App
