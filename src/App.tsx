import { Routes, Route } from "react-router-dom"

import HomeView from "./routes/HomeView"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  )
}

export default App
