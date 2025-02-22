import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../../../common/Button/Button";
import PropTypes from "prop-types";

const MountOverlay: any = document.getElementById("overlay");

interface breakTimerProps {
  canOpen: boolean;
  onClose: any;
  shortTime: number;
  longTime: number;
}

function BreakTimer(props: breakTimerProps) {
  const { canOpen, onClose, shortTime, longTime } = props;
  const stateModal = { opacity: 0 };
  const animateModal = { opacity: 1 };
  const transition = { duration: 1, ease: "easeInOut", delay: 0.05 };
  const [timeChosen, setTimeChosen] = useState(false);
  const [breakType, setBreakType] = useState("short");
  const [breakTime, setBreakTime] = useState({ minutes: 0, seconds: 0 });
  const breakIntervalID = useRef(0);
  const [breakOn, setBreakOn] = useState(false);
  // whenever break modal opens it will make sure that the timeChosen is set to false on load so
  // that the option for a short break and long break is always available
  useEffect(() => {
    setTimeChosen(false);
    if (breakIntervalID.current) {
      clearInterval(breakIntervalID.current);
    }
    setBreakTime({ minutes: 0, seconds: 0 });
    setBreakOn(false);
  }, [canOpen]);

  /*
  Timer functionality section
  */
  const startBreak = () => {
    if (!breakOn) {
      breakIntervalID.current = setInterval(() => {
        setBreakTime((prevBreak) => ({ ...prevBreak, seconds: prevBreak.seconds - 1 }));
      }, 1);
      setBreakOn(true);
    }
  };

  const pauseBreak = () => {
    if (breakOn) {
      clearInterval(breakIntervalID.current);
      setBreakOn(false);
    }
  };

  useEffect(() => {
    if (breakTime.minutes == 0 && breakTime.seconds == 0) {
      clearInterval(breakIntervalID.current);
      // TODO: Add some type of indicator that the timer is done (like a modal)
      // and once user closes indicator break modal closes and they can manually start the timer or maybe programmatically we can start it.
      return;
    }
    if (breakTime.seconds == 0 && breakOn) {
      setBreakTime((prevTime) => ({ minutes: prevTime.minutes - 1, seconds: 59 }));
    }
  }, [breakTime.seconds, breakOn]);
  /*
  END OF Timer functionality section
  */

  function choseTime() {
    const longBreak = () => {
      console.log("long break chosen");
      setTimeChosen((prev) => !prev);
      setBreakType("long");
      setBreakTime((prevBreak) => ({ ...prevBreak, minutes: longTime }));
    };
    const shortBreak = () => {
      console.log("short break chosen");
      setTimeChosen((prev) => !prev);
      setBreakType("short");
      setBreakTime((prevBreak) => ({ ...prevBreak, minutes: shortTime }));
    };

    return (
      <motion.div
        initial={stateModal}
        animate={animateModal}
        exit={stateModal}
        transition={transition}
        className="flex justify-evenly flex-col mt-10"
        key="choosetime">
        <h3 className="text-center text-2xl font-mono mb-10">Choose either a short or long break!</h3>
        <div className="flex items-center justify-evenly">
          <Button color="bg-blue-600" textColor="text-white" text="short break" ClickFunc={shortBreak} />
          <Button color="bg-red-600" textColor="text-white" text="long break" ClickFunc={longBreak} />
        </div>
      </motion.div>
    );
  }

  function timer() {
    return (
      <motion.div
        initial={stateModal}
        animate={animateModal}
        exit={stateModal}
        transition={transition}
        className="flex flex-col h-5/6 w-full justify-between gap-5 items-center">
        <div>
          <h3 className="text-center font-mono text-2xl">Congrats you chose a {breakType} break</h3>
          <p className="text-xs text-center">Note: if you exit out of this modal you lose your break.</p>
        </div>
        <p className="text-black font-mono text-5xl font-bold border-4 rounded-md border-white" id="timer-display">
          {setTime(breakTime.minutes) + ":" + setTime(breakTime.seconds % 60)}
        </p>
        <div className="flex justify-evenly w-1/2">
          <Button color="bg-blue-600" textColor="text-white" text="start" ClickFunc={startBreak} />
          <Button color="bg-red-600" textColor="text-white" text="pause" ClickFunc={pauseBreak} />
        </div>
      </motion.div>
    );
  }

  /**
   * @param currentTime value from 0 to 60
   * @returns either a singular string value from 10-60 or a string from 0-9 with an extra 0 in the front
   */
  const setTime = (currentTime: number) => {
    return currentTime > 9 ? currentTime.toString() : "0" + currentTime;
  };

  return createPortal(
    <>
      <AnimatePresence>
        {canOpen && (
          <motion.div
            initial={stateModal}
            animate={animateModal}
            exit={stateModal}
            transition={transition}
            className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0 overflow-y-auto overflow-x-auto flex items-center justify-center">
            <motion.div
              className="break-modal"
              initial={{ ...stateModal, y: 100 }}
              animate={{ ...animateModal, y: 0 }}
              exit={{ ...stateModal, y: -100 }}
              transition={transition}>
              <div className="celebration-modal-header">
                <h2 className="text-2xl font-mono">Its time to take a break☺️</h2>
                <button id="close-btn" onClick={onClose} className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2">
                  <IoMdClose className="text-white" />
                </button>
              </div>
              <div className="w-full h-56">
                <AnimatePresence mode="wait">{timeChosen ? timer() : choseTime()}</AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    MountOverlay
  );
}
BreakTimer.propTypes = {
  canOpen: PropTypes.bool,
  onClose: PropTypes.func,
  shortTime: PropTypes.number,
  longTime: PropTypes.number,
};
export default BreakTimer;
