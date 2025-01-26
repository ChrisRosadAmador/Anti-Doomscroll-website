import { useEffect, useRef, useState } from "react";
import Button from "../../common/Button/Button";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "../../common/Modals/SettingsModal";
import OverLays from "../../common/Modals/OverLays";

function PomodoroPage() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const intervalIdRef = useRef(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  /**
   * useEffect react hooks that update minute and hour timers to meet
   */
  useEffect(() => {
    if (seconds % 60 == 0 && seconds > 0) {
      setMinutes((minute) => minute + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes % 60 == 0 && minutes > 0) {
      setHours((hour) => hour + 1);
    }
    if (hours == 24) {
      ResetClick();
    }
  }, [minutes]);

  /**
   * button function that starts Pomodoro timer.
   */
  const StartClick = () => {
    console.log("Start button clicked!");
    if (!timerActive) {
      const timerIntervalID = setInterval(() => {
        setSeconds((second) => second + 1);
      }, 1000);
      setTimerActive(true);
      intervalIdRef.current = timerIntervalID;
    }
  };

  /**
   * button function that stops Pomodoro timer.
   */
  const PauseClick = () => {
    if (timerActive) {
      const intervalID = intervalIdRef.current;
      clearInterval(intervalID);
      setTimerActive(false);
    }
    console.log("End button clicked!");
  };

  /**
   * button function that resets Pomodoro timer.
   */
  const ResetClick = () => {
    PauseClick();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    console.log("Reset button clicked!");
  };
  /**
   *
   * @param currentTime value from 0 to 60
   * @returns either a singular string value from 10-60 or a string from 0-9 with an extra 0 in the front
   */
  const setTime = (currentTime: number) => {
    return currentTime > 9 ? currentTime.toString() : "0" + currentTime;
  };

  return (
    <>
      <h1 className="title-style mb-16 mt-28">Pomodoro Timer</h1>
      <div
        id="timer-section"
        className="flex justify-center items-center flex-col gap-10"
      >
        <div id="timer-display-section" className="flex justify-center">
          <p
            className="text-white font-mono text-8xl font-bold border-4 p-5 rounded-md border-white"
            id="timer-display"
          >
            {setTime(hours % 60) +
              ":" +
              setTime(minutes % 60) +
              ":" +
              setTime(seconds % 60)}
          </p>
        </div>
        <div id="button-section" className="flex gap-4 justify-center">
          <Button
            color="bg-blue-600"
            text="Start"
            textColor="text-white"
            ClickFunc={StartClick}
          />
          <Button
            color="bg-red-600"
            text="Pause"
            textColor="text-white"
            ClickFunc={PauseClick}
          />
          <Button
            color="bg-white"
            text="Reset"
            textColor="text-black"
            ClickFunc={ResetClick}
          />
        </div>
      </div>
      <button
        className="text-white text-5xl setting-postion"
        onClick={() => {
          setSettingsOpen((setting) => !setting);
        }}
      >
        <IoSettingsOutline />
      </button>
      <OverLays isOpen={settingsOpen} Modal={<SettingsModal />} />
    </>
  );
}

export default PomodoroPage;

/*
Notes on how to create timer:
- create start, pause, & reset timer.
- display timer
- refresh timer each 1000 miliseconds.
    - if seconds hit zero then decrement minute timer
    - if minute timer is zero && second timer is zero then decrement hour timer and add 59 minutes & 59 seconds to timer. 
      
- if pause is hit stop interval but save current time
- reset button: when page is loaded / time is inputed, save that value.

*/
