import github from "../assets/github-mark-white.png";

function Footer() {
  return (
    <>
      <footer className="flex flex-nowrap flex-row h-16 w-full justify-between page-segment-height bottom-0 bg-neutral-800">
        <nav className="flex items-center space-x-4 px-2">
          <a
            target="_blank"
            href="https://github.com/ChrisRosadAmador/Anti-Doomscroll-website"
          >
            <img className="h-3 w-3" src={github} alt="Github-Logo" />
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
