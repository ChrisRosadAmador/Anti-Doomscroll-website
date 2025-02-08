import { motion } from "framer-motion";
function AboutPage() {
  const visibleFrame = { opacity: 1 };
  const invisibleFrame = { opacity: 0 };

  return (
    <>
      <motion.h1
        initial={invisibleFrame}
        animate={visibleFrame}
        exit={invisibleFrame}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="title-style"
      >
        About the Developers
      </motion.h1>
    </>
  );
}

export default AboutPage;
