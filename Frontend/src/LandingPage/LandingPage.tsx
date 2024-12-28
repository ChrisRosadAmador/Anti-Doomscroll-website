// import PomodoroImg from './assets/PomodoroTimer'; fix later not importing correctly.
function LandingPage() {
  return (
    <>
      <div className="bg-neutral-700 text-center h-screen w-screen overflow-y-auto font-mono">
        <h1 className="text-white text-4xl font-bold py-8">
          What is Anti-Doomscroll?
        </h1>
        <div
          className="grid gap-2 grid-cols-2 h-screen justify-items-center"
          id="infoDiv"
        >
          <span className="border-red-500 justify-self-end border-4 Regular-text text-center w-1/2">
            The Anti-Doomscroll website is meant to be a helper in a students
            battle against procrastination. The Anti-Doomscroll is a
            pomodoro-based timer that, with the accompanied chrome extension,
            will ensure that you do not visit any websites on chrome that are on
            your blacklist.
          </span>
          <span className="border-blue-500 justify-self-start border-4 Regular-text text-center w-1/2">
            <img
              src="PomodoroTimer.jpg"
              alt="Tomato pomodoro timer image"
            ></img>
          </span>
          <span className="border-green-500 justify-self-end  border-4 Regular-text text-center w-1/2">
            Box #3
          </span>
          <span className="border-orange-500 justify-self-start border-4 Regular-text text-center w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur sequi ad fuga error iste quisquam architecto iure
            dolore doloremque autem. Dolorem explicabo quis quia iure numquam id
            ullam deserunt distinctio.Box #4
          </span>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
