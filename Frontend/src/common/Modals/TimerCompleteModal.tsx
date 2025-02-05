import { createPortal } from "react-dom";
const MountOverlay: any = document.getElementById("overlay");

function TimerCompleteModal(props: any) {
  const { canOpen, onClose } = props;
  console.log(canOpen);
  if (!canOpen) return null;

  return createPortal(
    <>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-45">
        <div className="w-1/3 h-1/4 bg-white rounded-lg">
          <p>Congrats timer is complete!!</p>
          <button onClick={onClose}>close modal</button>
        </div>
      </div>
    </>,
    MountOverlay
  );
}

export default TimerCompleteModal;
