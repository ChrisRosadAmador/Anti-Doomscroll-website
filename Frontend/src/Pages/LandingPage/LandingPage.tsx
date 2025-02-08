import PomodoroImg from "../../assets/PomodoroTimer.jpg";
import BlacklistImg from "../../assets/blacklist-icon.jpeg";
import { motion } from "framer-motion";
function LandingPage() {
  const visibleFrame = { opacity: 1 };
  const invisibleFrame = { opacity: 0 };
  return (
    <>
      <motion.h1
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="title-style"
      >
        What is Anti-Doomscroll?
      </motion.h1>
      <motion.div
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-5 grid-cols-2 pb-10"
        id="infoDiv"
      >
        <span className="justify-self-end Landing-Page-grid">
          <p className="Regular-text text-left">
            The Anti-Doomscroll website is a powerful tool to help students
            combat procrastination. Built around the Pomodoro technique, it
            features a timer paired with a Chrome extension to block access to
            blacklisted websites, keeping your focus sharp and distractions at
            bay.
          </p>
        </span>
        <span className="justify-self-start Landing-Page-grid">
          <img src={PomodoroImg} alt="Tomato pomodoro timer image"></img>
        </span>
        <span className="justify-self-end Landing-Page-grid">
          <img src={BlacklistImg} alt="blacklist image"></img>
        </span>
        <span className="justify-self-start Landing-Page-grid">
          <p className="text-left Regular-text">
            The blacklist feature lets you block or receive reminders for
            websites you want to avoid. With your permission, Anti-Doomscroll
            steps in to either block access or nudge you back on track. Without
            it, you're free to procrastinate—good luck!
          </p>
        </span>
      </motion.div>
    </>
  );
}

export default LandingPage;
