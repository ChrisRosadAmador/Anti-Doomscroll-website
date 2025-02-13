import { createPortal } from "react-dom";
import { GiSharpSmile } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const MountOverlay: any = document.getElementById("overlay");

function CelebrationModal(props: any) {
  const { canOpen, onClose } = props;
  const stateModal = { opacity: 0 };
  const animateModal = { opacity: 1 };
  const transition = { duration: 1, ease: "easeInOut", delay: 0.05 };

  return createPortal(
    <>
      <AnimatePresence>
        {canOpen && (
          <motion.div
            initial={stateModal}
            animate={animateModal}
            exit={stateModal}
            transition={transition}
            className="h-full w-full bg-black bg-opacity-50 fixed left-0 top-0 overflow-y-auto overflow-x-auto flex items-center justify-center">
            <motion.div
              className="break-modal"
              initial={{ ...stateModal, y: 100 }}
              animate={{ ...animateModal, y: 0 }}
              exit={{ ...stateModal, y: -100 }}
              transition={transition}>
              <div className="celebration-modal-header">
                <p className="text-2xl font-mono">Its time to take a break☺️</p>
                <button id="close-btn" onClick={onClose} className="bg-red-600 flex flex-grow-0 rounded-lg w-10 h-6 justify-center items-center mr-2">
                  <IoMdClose className="text-white" />
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

export default CelebrationModal;
