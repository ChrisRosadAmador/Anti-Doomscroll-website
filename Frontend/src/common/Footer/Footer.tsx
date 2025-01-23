import github from "../../assets/github-mark-white.png";
import LinkedIn from "../../assets/LI-In-Bug.png";
import { NavLink } from "react-router";

function Footer() {
  return (
    <>
      <footer className="flex flex-nowrap flex-row h-16 w-full justify-between page-segment-height items-center bottom-0 bg-neutral-800">
        <nav className="flex items-center space-x-4 px-2 gap-1">
          <a
            target="_blank"
            href="https://github.com/ChrisRosadAmador/Anti-Doomscroll-website"
          >
            <img className="h-4 w-4" src={github} alt="Github-Logo" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/christopher-rosado-amador-11a5a8238/"
          >
            <img className="h-4 w-4" src={LinkedIn} alt="LinkedIn-Logo" />
          </a>
        </nav>
        <NavLink className="Regular-text text-center" to="/AboutUs">
          about us
        </NavLink>
        <p className="Regular-text pr-2">@2025 RosadMarti</p>
      </footer>
    </>
  );
}

export default Footer;
