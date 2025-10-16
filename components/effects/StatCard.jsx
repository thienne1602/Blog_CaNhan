"use client";

import { motion } from "framer-motion";

const StatCard = ({ value, label, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="relative group"
    >
      <div className="relative rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 p-6 shadow-lg border border-primary-100 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Icon */}
        {icon && (
          <motion.div
            className="absolute top-4 right-4 text-3xl opacity-20"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <motion.p
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          >
            {value}
          </motion.p>
          <p className="mt-3 text-sm text-secondary-600 font-medium">{label}</p>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

export default StatCard;
