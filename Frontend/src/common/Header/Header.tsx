import { NavLink } from "react-router";
function Header() {
  return (
    <>
      <header className="flex flex-nowrap flex-row w-full page-segment-height justify-between top-0 bg-neutral-800 shadow-md shadow-slate-950">
        <div className="flex items-center px-2">
          <h1 className="text-base lg:text-xl md:text-xl sm:text-lg text-white font-mono">
            Anti-Doomscroll
          </h1>
        </div>
        <nav className="flex items-center space-x-4 px-4">
          <NavLink className="Regular-text" to="/">
            info
          </NavLink>
          <NavLink className="Regular-text" to="/Pomodoro">
            Pomodoro
          </NavLink>
          <a href="#" className="Regular-text">
            Login
          </a>
          <a href="#" className="Regular-text">
            Sign Up
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
