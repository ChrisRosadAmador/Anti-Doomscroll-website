import { createPortal } from "react-dom";
import { GiSharpSmile } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const MountOverlay: any = document.getElementById("overlay");
const celebrationModal: any = document.getElementById("celebration-modal");

function CelebrationModal(props: any) {
  const { canOpen, onClose } = props;
  console.log(canOpen);
  if (!canOpen) return null;
  const viewSize = () => {
    console.log(
      celebrationModal.getBoundingClientRect().width,
      celebrationModal.getBoundingClientRect().height
    );
  };

  return createPortal(
    <>
      <div className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0 overflow-y-auto overflow-x-auto flex items-center justify-center">
        <div id="celebration-modal" className="celebration-modal">
          <div className="celebration-modal-header">
            <p className="text-2xl font-mono">Congrats timer is complete!!</p>
            <button
              onClick={onClose}
              className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2"
            >
              <IoMdClose className="text-white" />
            </button>
          </div>
          <div className="flex flex-col">
            <p className="font-mono text-center">
              Great job on completing your studying habits today! Enjoy the rest
              of your day full of brainrot or otherwise. My job is done so I
              don't care...
            </p>
            <GiSharpSmile className="text-2xl self-center" />
          </div>
        </div>
      </div>
    </>,
    MountOverlay
  );
}

export default CelebrationModal;
