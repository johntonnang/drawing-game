import { NavLink } from "react-router-dom"

function HomePage() {
  return (
    <div className="flex flex-col h-screen items-center w-full justify-center">
      <NavLink to="/create" className="text-5xl m-2">
        Create game
      </NavLink>
      <NavLink to="/join" className="text-5xl m-2">
        Join game
      </NavLink>
      <NavLink to="/instructions" className="text-5xl m-2">
        Instructions
      </NavLink>
    </div>
  )
}

export default HomePage
