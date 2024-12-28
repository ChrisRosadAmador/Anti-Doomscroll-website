import { NavLink } from "react-router";
function Header() {
  return (
    <>
    <header className="flex flex-nowrap flex-row h-16 w-full justify-between bg-neutral-800">
      <div className="flex items-center px-2">
        <h1 className="text-base lg:text-2xl md:text-xl sm:text-lg text-white font-mono">Anti-Doomscroll</h1>
      </div>
        <nav className="flex items-center space-x-4 px-2">
          <NavLink className="Regular-text" to='/'>About</NavLink>
          <NavLink className="Regular-text" to='/Pomodoro'>Pomodoro</NavLink>
          <a href="#" className="Regular-text">Login</a>
          <a href="#" className="Regular-text">Sign Up</a>
        </nav>
    </header>
    </>
  );
}

export default Header;
