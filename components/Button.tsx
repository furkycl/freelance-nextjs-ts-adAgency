"use client";
import { motion } from "framer-motion";
import { ReactNode, FC } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      className="bg-slate-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg cursor-pointer"
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
