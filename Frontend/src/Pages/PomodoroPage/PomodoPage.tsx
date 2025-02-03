import { useEffect, useRef, useState } from "react";
import Button from "../../common/Button/Button";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from "../../common/Modals/SettingsModal";

function PomodoroPage() {
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [timerActive, setTimerActive] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<settingInput>(null);
  const [pause, setPause] = useState(false);
  const intervalIdRef = useRef(0);

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
  /**
   * useEffect react hooks that update minute and hour timers to meet
   */
  useEffect(() => {
    if (timer.hours == 0 && timer.minutes == 0 && timer.seconds == 0) {
      clearInterval(intervalIdRef.current);
      setTimerActive(false);
      return;
    }
    if (timer.seconds == 0 && timer.minutes > 0 && timerActive) {
      setTimer((prevTimer) => ({
        hours: prevTimer.hours,
        minutes: prevTimer.minutes - 1,
        seconds: 59,
      }));
    }

    if (timer.seconds == 0 && timer.minutes == 0 && timerActive) {
      setTimer((prevTimer) => ({
        hours: prevTimer.hours - 1,
        minutes: 59,
        seconds: 59,
      }));
    }
  }, [timer.seconds, timer.minutes]);

  useEffect(() => {
    if (settingsRef.current && !timerActive) {
      setTimer({ hours: settingsRef.current.pomodoro, minutes: 0, seconds: 0 });
    }
  }, [settingsRef.current]);
  /**
   * button function that starts Pomodoro timer.
   */
  const StartClick = () => {
    if (!timerActive && settingsRef.current && timer.hours > 0) {
      console.log("Start button clicked!");
      if (!pause) {
        setTimer((prevTimer) => ({
          hours: prevTimer.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
        setPause(true);
      }
      const timerIntervalID = setInterval(() => {
        setTimer((prevTimer) => ({
          ...prevTimer,
          seconds: prevTimer.seconds - 1,
        }));
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
      console.log("End button clicked!");
    }
  };

  /**
   * button function that resets Pomodoro timer.
   */
  const ResetClick = () => {
    if (settingsRef.current) {
      setPause(false);
      PauseClick();
      setTimer({ hours: settingsRef.current.pomodoro, minutes: 0, seconds: 0 });
      console.log("Reset button clicked!");
    }
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
            {setTime(timer.hours % 60) +
              ":" +
              setTime(timer.minutes % 60) +
              ":" +
              setTime(timer.seconds % 60)}
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
          if (body) body.style.overflow = "hidden";
          setSettingsOpen(true);
        }}
      >
        <IoSettingsOutline />
      </button>

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
