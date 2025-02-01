import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { createPortal } from "react-dom";
const MountOverlay: any = document.getElementById("overlay");
import { useForm } from "react-hook-form";

function SettingsModal(props: any) {
  const { isOpen, closeModal } = props;
  console.log(isOpen);
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0"></div>
      <div className="setting-modal-postion">
        <div className="bg-white flex flex-row items-center h-12 w-full rounded-t-2xl setting-modal-border">
          <p className="flex-1 ml-2 flex flex-row gap-2 items-center font-mono text-2xl">
            <IoSettingsOutline />
            Settings
          </p>
          <button
            onClick={closeModal}
            className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2"
          >
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
              width: "0.5px",
              height: "100%",
              margin: "0px 5px 5px 5px",
            }}
            className="bg-neutral-300"
          />
          <form className="flex flex-col justify-evenly">
            {/* need to change this to a grid and format it in grid template columns otherwise we have a bunch of forms to submit back coding practice. */}
            <div className="flex h-12 gap-4 items-center mr-1">
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
            </div>
            <div className="flex h-12 gap-4 items-center mr-1 justify-center">
              <select className="w-1/2 h-8 font-mono text-xs bg-zinc-300 rounded-md">
                <option value={""}>Please select an Option</option>
                <option value={"Options1"}>Options1</option>
                <option value={"Options2"}>Options1</option>
                <option value={"Options3"}>Options1</option>
                <option value={"Options4"}>Options1</option>
              </select>
              <select className="w-1/2 h-8 font-mono text-xs bg-zinc-300 rounded-md">
                <option value={""}>Please select an Option</option>
                <option value={"Options1"}>Options1</option>
                <option value={"Options2"}>Options1</option>
                <option value={"Options3"}>Options1</option>
                <option value={"Options4"}>Options1</option>
              </select>
            </div>
            <div className="flex h-12 gap-4 items-center mr-1">
              <input
                className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
                placeholder="Pomodoro"
              />
            </div>
          </form>
        </div>
        <div className="setting-modal-footer h-10 w-full rounded-b-2xl flex items-end flex-col justify-items-center justify-around">
          <button className="mr-5 bg-blue-500 rounded-md font-bold font-mono w-28 text-white">
            Save Changes
          </button>
        </div>
      </div>
    </>,
    MountOverlay
  );
}

export default SettingsModal;
