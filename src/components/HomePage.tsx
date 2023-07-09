import { NavLink } from 'react-router-dom'
import Footer from './Footer'

function HomePage() {
  return (
    <>
      <div className="flex flex-col h-screen items-center w-full justify-center text-white">
        <div className="flex w-full items-center justify-center absolute top-16">
          <h1 className="font-gloria text-8xl drop-shadow-[0_20px_5px_rgba(0,0,0,0.25)]">
            DoodleTime
          </h1>
        </div>
        <div className="bg-blue h-[15.625rem] flex flex-col items-center justify-center rounded-2xl w-[21.875rem] gap-8">
          <div className="rounded-2xl flex w-[18.75rem] h-[4.6875rem] bg-green items-center justify-center">
            <NavLink to="/create" className="text-2xl font-gloria">
              Create game
            </NavLink>
          </div>
          <div className="rounded-2xl flex items-center justify-center w-[18.75rem] h-[4.6875rem] bg-orange">
            <NavLink to="/join" className="text-2xl font-gloria">
              Join game
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
