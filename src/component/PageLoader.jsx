import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = ({ progress }) => {
  return (
    <AnimatePresence>
      {progress > 0 && progress < 100 && (
        <motion.div
          key="page-loader"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-[70px] left-0 h-[3px] bg-primary z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};
