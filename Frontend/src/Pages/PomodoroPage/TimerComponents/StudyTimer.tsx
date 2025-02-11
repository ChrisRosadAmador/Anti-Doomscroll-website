import { useEffect, useRef, useState } from "react";
import Button from "../../../common/Button/Button";

function StudyTimer(props: any) {
  //necessary props: settings useRef, timerComplete useState,bodyRef elementRef
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [timerActive, setTimerActive] = useState(false);
  const [pause, setPause] = useState(false);
  const intervalIdRef = useRef(0);
  const [breaks, setBreaks] = useState<number[]>([]);
  const { settingReference, timerState, bodyRef, breaksRef } = props;

  /**
   * @param hours The current hours remaining when function is called. A number that goes from 0-24.
   * @param minutes The current minutes remaining when function is called. A number that goes from 0-59.
   * @returns A numerical value representing the time inputted.
   */
  const convertTime = (hours: number, minutes: number) => {
    return hours * 60 + minutes;
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
    setTimerActive(false);
  };

  /**
   * @param currentTime value from 0 to 60
   * @returns either a singular string value from 10-60 or a string from 0-9 with an extra 0 in the front
   */
  const setTime = (currentTime: number) => {
    return currentTime > 9 ? currentTime.toString() : "0" + currentTime;
  };

  /**
   * useEffect react hooks that update minute and hour timers to meet
   */
  useEffect(() => {
    // case 1: if timer is complete then go through steps to reset timer.
    if (timer.hours == 0 && timer.minutes == 0 && timer.seconds == 0) {
      // case 1.1: checks if the settings input is still accesssible and if it is then the timer is reset to that time.
      if (settingReference.current) {
        setTimer((prevTimer) => ({
          ...prevTimer,
          hours: settingReference.current.pomodoro,
        }));
      }

      // case 1.2: if timerActive state is set to true then the timer was active when the clock hit 0 so open "celebration" modal to mark end of pomodoro.
      if (timerActive) {
        if (bodyRef) bodyRef.style.overflow = "hidden";
        timerState(true);
      }
      setPause(false);
      stopTimer();
      return;
    }

    // case 2: if converted timer value is equal to the top most break then start break sequence
    if (
      breaks.length != 0 &&
      convertTime(timer.hours, timer.minutes) == breaks[breaks.length - 1] &&
      timer.seconds == 1
    ) {
      setBreaks((prevBreaks) => [
        ...prevBreaks.slice(0, prevBreaks.length - 1),
      ]);

      stopTimer();
      return;
    }

    // case 3: if timer is and seconds is equal to zero go through to find out which value to decrement.
    if (timerActive && timer.seconds == 0) {
      // case 3.1: if timer minutes is not zero yet then decrement from minute value and add 59 to seconds.
      if (timer.minutes > 0) {
        setTimer((prevTimer) => ({
          hours: prevTimer.hours,
          minutes: prevTimer.minutes - 1,
          seconds: 59,
        }));
      } else {
        // case 3.2: minutes hit zero so must decrement hours timer so replenish minutes and seconds values.
        setTimer((prevTimer) => ({
          hours: prevTimer.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      }
    }
  }, [timer.seconds, timer.minutes]);

  /**
   * useEffect sets a new value for the timer when the timer is not active
   */
  useEffect(() => {
    if (settingReference.current && !timerActive) {
      setPause(false);
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
      // if the pause button is not available (e.g. the timer has not started yet) then start timer.
      if (!pause) {
        setTimer((prevTimer) => ({
          hours: prevTimer.hours - 1,
          minutes: 59,
          seconds: 59,
        }));

        setPause(true);
        setBreaks([...breaksRef.current]);
      }

      //setting up timer interval this runs no matter if the timer has just started or not.
      const timerIntervalID = setInterval(() => {
        setTimer((prevTimer) => ({
          ...prevTimer,
          seconds: prevTimer.seconds - 1,
        }));
      }, 1);

      setTimerActive(true);
      intervalIdRef.current = timerIntervalID;
    }
  };

  /**
   * button function that stops Pomodoro timer.
   */
  const PauseClick = () => {
    if (timerActive) {
      stopTimer();
    }
  };

  /**
   * button function that resets Pomodoro timer.
   */
  const ResetClick = () => {
    if (settingReference.current) {
      setPause(false);
      PauseClick();
      setBreaks([...breaksRef.current]);
      setTimer({
        hours: settingReference.current.pomodoro,
        minutes: 0,
        seconds: 0,
      });

      console.log(breaks);
    }
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
