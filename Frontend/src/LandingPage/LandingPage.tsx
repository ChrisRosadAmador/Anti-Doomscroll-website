import PomodoroImg from "../assets/PomodoroTimer.jpg";
function LandingPage() {
  return (
    <>
      <h1 className="title-style">What is Anti-Doomscroll?</h1>
      <div className="grid gap-2 grid-cols-2 justify-items-center" id="infoDiv">
        <span className="border-red-500 justify-self-end border-4 Regular-text text-center w-1/2">
          The Anti-Doomscroll website is a powerful tool to help students combat
          procrastination. Built around the Pomodoro technique, it features a
          timer paired with a Chrome extension to block access to blacklisted
          websites, keeping your focus sharp and distractions at bay.
        </span>
        <span className="border-blue-500 justify-self-start border-4 Regular-text text-center w-1/2">
          <img src={PomodoroImg} alt="Tomato pomodoro timer image"></img>
        </span>
        <span className="border-green-500 justify-self-end my-10 border-4 Regular-text text-center w-1/2">
          <img src={PomodoroImg} alt="Tomato pomodoro timer image"></img>
        </span>
        <span className="border-orange-500 my-10 justify-self-start border-4 Regular-text text-center w-1/2">
          The blacklist feature lets you create a list of websites that you want
          to block or be notified about. If you try to visit any of these sites,
          Anti-Doomscroll will step in—either blocking access or sending a
          reminder to keep you on track. Of course, this only works if you grant
          us the necessary permissions. Without them, you’re free to
          procrastinate as you wish—good luck!
        </span>
      </div>
    </>
  );
}

export default LandingPage;
