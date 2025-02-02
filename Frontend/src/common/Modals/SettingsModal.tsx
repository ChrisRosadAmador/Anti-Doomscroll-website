import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { createPortal } from "react-dom";
const MountOverlay: any = document.getElementById("overlay");
import { useForm } from "react-hook-form";
import { useState } from "react";

function SettingsModal(props: any) {
  const { isOpen, closeModal, settingsObj } = props;
  if (!isOpen) return null;

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

  const [notification, setNotification] = useState(false);
  const { register, handleSubmit, formState } = useForm<settingInput>();
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
          <div className="flex flex-col justify-evenly gap-8 text-center w-28 text-neutral-800 font-mono">
            <p className="pt-5">Time</p>
            <p>Sound</p>
            <p className="pb-5">Nofications</p>
          </div>
          <hr
            style={{
              width: "0.5px",
              height: "100%",
              margin: "0px 5px 5px 5px",
            }}
            className="bg-neutral-300"
          />
          <form
            id="setting-form"
            className="flex flex-col justify-evenly w-full mr-5"
            onSubmit={handleSubmit((data) => {
              settingsObj.current = data;
              console.log(data);
            })}
          >
            {/* need to change this to a grid and format it in grid template columns otherwise we have a bunch of forms to submit back coding practice. */}
            <div className="flex h-12 gap-4 items-center mr-1">
              <input
                className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
                placeholder="Pomodoro (hours)"
                type="number"
                min={1}
                max={24}
                {...register("pomodoro", { min: 1, max: 24 })}
              />
              <input
                className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
                placeholder="Short Break (minutes)"
                type="number"
                min={1}
                max={20}
                {...register("shortBreak", { min: 1, max: 60 })}
              />
              <input
                className="w-1/3 h-8 font-mono text-xs bg-zinc-300  rounded-md"
                placeholder="Long Break (minutes)"
                type="number"
                {...register("longBreak", { min: 1, max: 60 })}
              />
            </div>
            <div className="flex h-12 gap-4 items-center mr-1 justify-center">
              <select
                className="w-1/2 h-8 font-mono text-xs bg-zinc-300 rounded-md"
                {...register("alarm")}
              >
                <option value={alarmSound.placeHolder}>
                  Please select an Alarm
                </option>
                <option value={alarmSound.alarm1}>sound1</option>
                <option value={alarmSound.alarm2}>sound2</option>
                <option value={alarmSound.alarm3}>sound3</option>
              </select>
              <select
                className="w-1/2 h-8 font-mono text-xs bg-zinc-300 rounded-md"
                {...register("bgMusic")}
              >
                <option value={backgroundMusic.placeHolder}>
                  Please select background music
                </option>
                <option value={backgroundMusic.bgMusic1}>bgMusic1</option>
                <option value={backgroundMusic.bgMusic2}>bgMusic2</option>
                <option value={backgroundMusic.bgMusic3}>bgMusic3</option>
              </select>
            </div>
            <div className="flex flex-rowh-12 gap-4 items-center mr-1">
              <label className="inline-block hover:cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden peer"
                  onClick={() => setNotification(!notification)}
                  {...register("notification")}
                />
                <div className="relative w-10 h-5 peer-checked:bg-green-600 transition-colors rounded-xl bg-neutral-400 circle after:transition-all  peer-checked:after:translate-x-5"></div>
              </label>
              <span className="bg-white">
                {notification ? "enabled" : "disabled"}
              </span>
            </div>
          </form>
        </div>
        <div className="setting-modal-footer h-10 w-full rounded-b-2xl flex items-end flex-col justify-items-center justify-around">
          <button
            type="submit"
            form="setting-form"
            className="mr-5 bg-blue-500 rounded-md font-bold font-mono w-28 text-white"
            onClick={() => {
              if (formState.isValid) {
                setTimeout(closeModal, 50);
              }
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>,
    MountOverlay
  );
}

export default SettingsModal;
