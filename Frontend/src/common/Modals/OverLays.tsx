import { createPortal } from "react-dom";
const MountOverlay: any = document.getElementById("overlay");

function OverLays(props: any) {
  return createPortal(<>{props.isOpen && props.Modal}</>, MountOverlay);
}

export default OverLays;
