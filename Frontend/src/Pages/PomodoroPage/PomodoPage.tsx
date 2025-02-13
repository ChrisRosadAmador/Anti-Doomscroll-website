import { useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { SettingsModal, settingInput } from "../../common/Modals/SettingsModal";
import CelebrationModal from "../../common/Modals/CelebrationModal";
import StudyTimer from "./TimerComponents/StudyTimer";
import BreakTimer from "./TimerComponents/BreakTimer";

function PomodoroPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);
  const [timerBreak, setTimerBreak] = useState(false);
  const breakArrayRef = useRef<number[]>([]);
  const settingsRef = useRef<settingInput>(null);
  const body: HTMLElement | null = document.getElementById("body");

  const visibleFrame = { opacity: 1 };
  const invisibleFrame = { opacity: 0 };

  const calcBreaks = () => {
    if (settingsRef.current) {
      let breakInterval = (settingsRef.current.pomodoro * 60) / (settingsRef.current.breaks + 1);
      breakArrayRef.current = [];
      breakArrayRef.current.push(breakInterval);

      for (let i = 1; i < settingsRef.current.breaks; i++) {
        breakArrayRef.current.push(breakArrayRef.current[i - 1] + breakInterval);
      }
      console.log(breakArrayRef.current);
    }
  };

  return (
    <>
      <motion.h1
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="title-style mb-16 mt-10">
        Pomodoro Timer
      </motion.h1>
      <motion.div
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        id="timer-section"
        className="flex justify-center items-center flex-col gap-10">
        <StudyTimer
          breaksRef={breakArrayRef}
          settingReference={settingsRef}
          timerState={(newState: boolean) => {
            setTimerComplete(newState);
          }}
          bodyRef={body}
          setBreakModal={(startBreak: boolean) => {
            setTimerBreak(startBreak);
          }}
        />
        <button
          className="text-white text-5xl setting-postion"
          onClick={() => {
            if (body) body.style.overflow = "hidden";
            setSettingsOpen(true);
          }}>
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
        confirmInput={() => {
          calcBreaks();
          setSettingsOpen(false);
        }}
        settingsObj={settingsRef}
      />

      <BreakTimer
        canOpen={timerBreak}
        onClose={() => {
          if (body) body.style.overflow = "hidden auto";
          setTimerBreak(false);
        }}
      />
    </>
  );
}

export default PomodoroPage;
