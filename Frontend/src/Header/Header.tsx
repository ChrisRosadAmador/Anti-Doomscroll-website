function Header() {
  return (
    <>
    <header className="flex flex-nowrap flex-row h-16 w-full justify-between bg-neutral-800">
      <div className="flex items-center px-2">
        <h1 className="text-base lg:text-2xl md:text-xl sm:text-lg text-white font-mono">Anti-Doomscroll</h1>
      </div>
        <nav className="flex items-center space-x-4 px-2">
            <a href="#" className="text-base lg:text-lg md:text-sm sm:text-xs text-white">Pomodoro</a>
            <a href="#" className="text-base lg:text-lg md:text-sm sm:text-xs text-white">Login</a>
            <a href="#" className="text-base lg:text-lg md:text-sm sm:text-xs text-white">Sign Up</a>
        </nav>
    </header>
    </>
  );
}

export default Header;
