import { Routes, Route } from 'react-router-dom';

import HomeView from './routes/HomeView';
import CreateView from './routes/CreateView';
import JoinView from './routes/JoinView';
import InstructionsView from './routes/InstructionsView';
import LobbyView from './routes/LobbyView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/create" element={<CreateView />} />
      <Route path="/join" element={<JoinView />} />
      <Route path="/instructions" element={<InstructionsView />} />
      <Route path="/lobby" element={<LobbyView />} />
    </Routes>
  );
}

export default App;
