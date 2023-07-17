import { NavLink } from 'react-router-dom'
import Footer from './Footer'

function HomePage() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center text-white">
        <div className="absolute top-16 flex w-full items-center justify-center">
          <h1 className="font-gloria text-8xl drop-shadow-[0_20px_5px_rgba(0,0,0,0.25)]">
            DoodleTime
          </h1>
        </div>
        <div className="flex h-[15.625rem] w-[21.875rem] flex-col items-center justify-center gap-8 rounded-2xl bg-blue">
          <div className="flex h-[4.6875rem] w-[18.75rem] items-center justify-center rounded-2xl bg-green">
            <NavLink to="/create" className="font-gloria text-2xl">
              Create game
            </NavLink>
          </div>
          <div className="flex h-[4.6875rem] w-[18.75rem] items-center justify-center rounded-2xl bg-orange">
            <NavLink to="/join" className="font-gloria text-2xl">
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
