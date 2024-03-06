"use client";
import { motion } from "framer-motion";
import { IoInformationCircleOutline } from "react-icons/io5";

const ErrorInline = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <motion.div
      className="flex w-full select-none items-center gap-x-2 rounded-md bg-red-700 p-2 font-bold text-red-300"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      transition={{ duration: 1, type: "spring" }}
    >
      <span>
        <IoInformationCircleOutline size={20} />
      </span>
      <span>{message}</span>
    </motion.div>
  );
};

export default ErrorInline;
