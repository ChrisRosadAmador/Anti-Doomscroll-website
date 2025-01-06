import Button from "../../common/Button/Button";
function PomodoroPage() {
  const StartClick = () => {
    console.log("Start button clicked!");
  };
  const EndClick = () => {
    console.log("End button clicked!");
  };
  const ResetClick = () => {
    console.log("Reset button clicked!");
  };

  return (
    <>
      <h1 className="title-style mb-28">Pomodoro Timer</h1>
      <div
        id="timer-section"
        className="flex justify-center items-center flex-col gap-10"
      >
        <div id="timer-display-section" className="flex justify-center">
          <p
            className="text-white font-mono text-8xl font-bold border-4 p-5 rounded-md border-white"
            id="timer-display"
          >
            00:00:00
          </p>
        </div>
        <div id="button-section" className="flex gap-4 justify-center pb-12">
          <Button
            color="bg-blue-600"
            text="Start"
            textColor="text-white"
            ClickFunc={StartClick}
          />
          <Button
            color="bg-red-600"
            text="End"
            textColor="text-white"
            ClickFunc={EndClick}
          />
          <Button
            color="bg-white"
            text="Reset"
            textColor="text-black"
            ClickFunc={ResetClick}
          />
        </div>
      </div>
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
