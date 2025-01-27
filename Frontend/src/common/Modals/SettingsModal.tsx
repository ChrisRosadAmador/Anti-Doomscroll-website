import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

function SettingsModal() {
  return (
    <>
      <div className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0"></div>
      <div className="setting-modal-postion">
        <div className="bg-zinc-300  flex flex-row items-center h-12 w-full rounded-t-2xl">
          <p className="flex-1 ml-2 flex flex-row gap-2 items-center font-mono text-2xl">
            <IoSettingsOutline />
            Settings
          </p>
          <button className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2">
            <IoMdClose className="text-white" />
          </button>
        </div>
        <div id="setting-input" className="flex-grow w-full flex gap-2">
          <div className="flex flex-col justify-between text-center w-28 text-neutral-800 font-mono">
            <p className="pt-5">Time</p>
            <p>Sound</p>
            <p className="pb-5">Nofication</p>
          </div>
          <hr
            style={{
              width: "1px",
              height: "100%",
              margin: "5px 5px 5px 5px",
            }}
            className="bg-neutral-800"
          />
          <form className="flex h-12 gap-4 items-center mr-1">
            {" "}
            {/* need to change this to a grid and format it in grid template columns otherwise we have a bunch of forms to submit back coding practice. */}{" "}
            <input
              className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
              placeholder="Pomodoro"
            />
            <input
              className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
              placeholder="Short Break"
            />
            <input
              className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
              placeholder="Long Break"
            />
          </form>
        </div>
        <div className="h-12 bg-zinc-300 w-full rounded-b-2xl"></div>
      </div>
    </>
  );
}

export default SettingsModal;
