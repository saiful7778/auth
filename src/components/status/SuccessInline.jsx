"use client";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";

const SuccessInline = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <motion.div
      className="flex w-full select-none items-center gap-x-2 rounded-md bg-emerald-700 p-2 font-bold text-emerald-200"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      transition={{ duration: 1, type: "spring" }}
    >
      <span>
        <FaRegCheckCircle size={18} />
      </span>
      <span>{message}</span>
    </motion.div>
  );
};

export default SuccessInline;
