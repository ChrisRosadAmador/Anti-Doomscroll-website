import { useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import SettingsModal from "../../common/Modals/SettingsModal";
import CelebrationModal from "../../common/Modals/CelebrationModal";
import StudyTimer from "./TimerComponents/StudyTimer";
function PomodoroPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<settingInput>(null);
  const [timerComplete, setTimerComplete] = useState(false);
  const body: HTMLElement | null = document.getElementById("body");

  enum alarmSound {
    placeHolder = "",
    alarm1 = "sound1",
    alarm2 = "sound2",
    alarm3 = "sound3",
  }

  enum backgroundMusic {
    placeHolder = "",
    bgMusic1 = "Music1",
    bgMusic2 = "Music2",
    bgMusic3 = "Music3",
  }
  interface settingInput {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
    alarm: alarmSound;
    bgMusic: backgroundMusic;
    notification: boolean;
  }

  const visibleFrame = { opacity: 1 };
  const invisibleFrame = { opacity: 0 };

  return (
    <>
      <motion.h1
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="title-style mb-16 mt-10"
      >
        Pomodoro Timer
      </motion.h1>
      <motion.div
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        id="timer-section"
        className="flex justify-center items-center flex-col gap-10"
      >
        <StudyTimer
          settingReference={settingsRef}
          timerState={(newState: boolean) => {
            setTimerComplete(newState);
          }}
          bodyRef={body}
        />
        <button
          className="text-white text-5xl setting-postion"
          onClick={() => {
            if (body) body.style.overflow = "hidden";
            setSettingsOpen(true);
          }}
        >
          <IoSettingsOutline />
        </button>
      </motion.div>

      <CelebrationModal
        canOpen={timerComplete}
        onClose={() => {
          setTimerComplete(false);
        }}
      />
      <SettingsModal
        isOpen={settingsOpen}
        closeModal={() => {
          if (body) body.style.overflow = "hidden auto";
          setSettingsOpen(false);
        }}
        settingsObj={settingsRef}
      />
    </>
  );
}

export default PomodoroPage;
