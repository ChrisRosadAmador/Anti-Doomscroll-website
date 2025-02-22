import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const MountOverlay: any = document.getElementById("overlay");

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
export interface settingInput {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  breaks: number;
  alarm: alarmSound;
  bgMusic: backgroundMusic;
  notification: boolean;
}

export function SettingsModal(props: any) {
  const { isOpen, closeModal, settingsObj, confirmInput } = props;
  const stateModal = { opacity: 0 };
  const animateModal = { opacity: 1 };
  const transition = { duration: 1, ease: "easeInOut", delay: 0.05 };

  const [notification, setNotification] = useState(false);
  const { register, handleSubmit, formState, trigger } = useForm<settingInput>({
    mode: "all",
  });

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={stateModal}
            animate={animateModal}
            exit={stateModal}
            transition={transition}
            className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0 overflow-y-auto overflow-x-hidden flex items-center justify-center">
            <motion.div
              initial={{ ...stateModal, y: 100 }}
              animate={{ ...animateModal, y: 0 }}
              exit={{ ...stateModal, y: -100 }}
              transition={transition}
              className="setting-modal-postion">
              <div className="bg-white flex flex-row items-center h-12 w-full rounded-t-2xl setting-modal-border">
                <p className="flex-1 ml-2 flex flex-row gap-2 items-center font-mono text-2xl">
                  <IoSettingsOutline />
                  Settings
                </p>
                <button onClick={closeModal} className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2">
                  <IoMdClose className="text-white" />
                </button>
              </div>
              <div id="setting-input" className="flex-grow w-full flex gap-2">
                <div className="flex flex-col justify-between gap-8 text-center w-28 text-neutral-800 font-mono">
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
                  className="flex flex-col gap-10 w-full mr-5"
                  onSubmit={handleSubmit((data) => {
                    settingsObj.current = data;
                    console.log(data);
                  })}>
                  <div className="flex h-12 gap-4 mt-2 items-center mr-1">
                    <label className="w-1/4 font-mono text-sm">
                      Pomodoro Timer
                      <input
                        className={`h-8 w-full font-mono text-xs border-2 bg-zinc-300 rounded-md ${formState.errors.pomodoro ? "border-red-500" : ""}`}
                        placeholder="Pomodoro (hours)"
                        type="number"
                        min={1}
                        max={24}
                        {...register("pomodoro", {
                          valueAsNumber: true,
                          min: {
                            value: 1,
                            message: "Error: input for pomodoro is too small. Must be in range of 1-24.",
                          },
                          max: {
                            value: 24,
                            message: "Error: input for pomodoro is too large. Must be in range of 1-24.",
                          },
                          required: {
                            value: true,
                            message: "Input is required for Pomodoro timer to work.",
                          },
                        })}
                      />
                      {formState.errors.pomodoro && <p className="settings-alert">{formState.errors.pomodoro.message}</p>}
                    </label>
                    <label className="w-1/4 font-mono text-sm">
                      Short Break Time
                      <input
                        className={`h-8 w-full font-mono text-xs border-2 bg-zinc-300 rounded-md ${formState.errors.shortBreak ? "border-red-500" : ""}`}
                        placeholder="Short Break (minutes)"
                        type="number"
                        min={5}
                        max={30}
                        {...register("shortBreak", {
                          valueAsNumber: true,
                          min: {
                            value: 5,
                            message: "Error: input for shortBreak is too small. Must be in range of 5-30 minutes.",
                          },
                          max: {
                            value: 30,
                            message: "Error: input for shortBreak is too large. Must be in range of 5-30 minutes.",
                          },
                          required: {
                            value: true,
                            message: "Input is required for Pomodoro timer to work.",
                          },
                        })}
                      />
                      {formState.errors.shortBreak && <p className="settings-alert">{formState.errors.shortBreak.message}</p>}
                    </label>
                    <label className="w-1/4 font-mono text-sm">
                      Long Break Time
                      <input
                        className={`h-8 w-full font-mono text-xs border-2 bg-zinc-300 rounded-md ${formState.errors.longBreak ? "border-red-500" : ""}`}
                        placeholder="Long Break (minutes)"
                        type="number"
                        {...register("longBreak", {
                          valueAsNumber: true,
                          min: {
                            value: 30,
                            message: "Error: input for longBreak is too small. Must be in range of 30-60 minutes.",
                          },
                          max: {
                            value: 60,
                            message: "Error: input for longBreak is too large. Must be in range of 30-60 minutes.",
                          },
                          required: {
                            value: true,
                            message: "Input is required for Pomodoro timer to work.",
                          },
                        })}
                      />
                      {formState.errors.longBreak && <p className="settings-alert">{formState.errors.longBreak.message}</p>}
                    </label>
                    <label className="w-1/4 font-mono text-sm">
                      break count
                      <input
                        className={`h-8 w-full font-mono text-xs border-2 bg-zinc-300 rounded-md ${formState.errors.breaks ? "border-red-500" : ""}`}
                        placeholder="# of breaks"
                        type="number"
                        {...register("breaks", {
                          valueAsNumber: true,
                          min: {
                            value: 1,
                            message: "Error: too few breaks, you must choose between 1-5 breaks.",
                          },
                          max: {
                            value: 5,
                            message: "Error: too many breaks, you must choose between 1-5 breaks.",
                          },
                          required: {
                            value: true,
                            message: "Input is required for Pomodoro timer to work.",
                          },
                        })}
                      />
                      {formState.errors.breaks && <p className="settings-alert">{formState.errors.breaks.message}</p>}{" "}
                    </label>
                  </div>
                  <div className="flex h-0 gap-4 items-center mr-1"></div>
                  <div className="flex h-12 gap-4 items-center mr-1 justify-center">
                    <label className="w-1/2 font-mono text-sm flex flex-col">
                      alarm options
                      <select className="h-8 font-mono text-xs bg-zinc-300 rounded-md" {...register("alarm")}>
                        <option value={alarmSound.placeHolder}>Please select an Alarm</option>
                        <option value={alarmSound.alarm1}>sound1</option>
                        <option value={alarmSound.alarm2}>sound2</option>
                        <option value={alarmSound.alarm3}>sound3</option>
                      </select>
                    </label>
                    <label className="w-1/2 font-mono text-sm flex flex-col">
                      alarm options
                      <select className="h-8 font-mono text-xs bg-zinc-300 rounded-md" {...register("bgMusic")}>
                        <option value={backgroundMusic.placeHolder}>Please select background music</option>
                        <option value={backgroundMusic.bgMusic1}>bgMusic1</option>
                        <option value={backgroundMusic.bgMusic2}>bgMusic2</option>
                        <option value={backgroundMusic.bgMusic3}>bgMusic3</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex mt-8 gap-4 items-center mr-1">
                    <label className="inline-block hover:cursor-pointer">
                      <input type="checkbox" className="hidden peer" onClick={() => setNotification(!notification)} {...register("notification")} />
                      <div className="relative w-10 h-5 peer-checked:bg-green-600 transition-colors rounded-xl bg-neutral-400 circle after:transition-all  peer-checked:after:translate-x-5"></div>
                    </label>
                    <span className="bg-white">{notification ? "enabled" : "disabled"}</span>
                  </div>
                </form>
              </div>
              <div className="setting-modal-footer h-10 w-full rounded-b-2xl flex items-end flex-col justify-items-center justify-around">
                <button
                  type="submit"
                  form="setting-form"
                  className="mr-5 bg-blue-500 rounded-md font-bold font-mono w-28 text-white"
                  onClick={async () => {
                    const isValid = await trigger();
                    if (isValid) {
                      setTimeout(() => {
                        confirmInput();
                      }, 50);
                    } else {
                      console.error("Warning errors found: ", formState.errors);
                    }
                  }}>
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    MountOverlay
  );
}
