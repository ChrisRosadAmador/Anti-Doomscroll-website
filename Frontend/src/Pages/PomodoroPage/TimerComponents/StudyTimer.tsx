import { useEffect, useRef, useState } from "react";
import Button from "../../../common/Button/Button";

function StudyTimer(props: any) {
  //necessary props: settings useRef, timerComplete useState,bodyRef elementRef
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [timerActive, setTimerActive] = useState(false);
  const [pause, setPause] = useState(false);
  const intervalIdRef = useRef(0);
  const { settingReference, timerState, bodyRef } = props;

  /**
   * useEffect react hooks that update minute and hour timers to meet
   */
  useEffect(() => {
    if (timer.hours == 0 && timer.minutes == 0 && timer.seconds == 0) {
      clearInterval(intervalIdRef.current);
      if (settingReference.current) {
        let Hours = settingReference.current.pomodoro;
        setTimer((prevTimer) => ({
          ...prevTimer,
          hours: Hours,
        }));
      }
      if (timerActive) {
        if (bodyRef) bodyRef.style.overflow = "hidden";
        timerState(true);
      }
      setPause(false);
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
    if (settingReference.current && !timerActive) {
      setTimer({
        hours: settingReference.current.pomodoro,
        minutes: 0,
        seconds: 0,
      });
    }
  }, [settingReference.current]);
  /**
   * button function that starts Pomodoro timer.
   */
  const StartClick = () => {
    if (
      !timerActive &&
      settingReference.current &&
      (timer.hours > 0 || timer.minutes > 0 || timer.seconds > 0)
    ) {
      console.log("Start button clicked!");
      console.log(timer, pause);
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
    if (settingReference.current) {
      setPause(false);
      PauseClick();
      setTimer({
        hours: settingReference.current.pomodoro,
        minutes: 0,
        seconds: 0,
      });
      console.log("Reset button clicked!");
    }
  };

  /**
   * @param currentTime value from 0 to 60
   * @returns either a singular string value from 10-60 or a string from 0-9 with an extra 0 in the front
   */
  const setTime = (currentTime: number) => {
    return currentTime > 9 ? currentTime.toString() : "0" + currentTime;
  };

  return (
    <>
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
    </>
  );
}

export default StudyTimer;
