import React from 'react';
import { motion } from 'framer-motion';

export const BotUpdater = () => {
  return (
    <div className="bot-updater-container">
      <motion.div
        className="bot-head"
        animate={{
          y: [0, -12, 0],
          scaleY: [0.9, 1.1, 0.9],
          scaleX: [1.1, 0.95, 1.1],
          borderRadius: ["50%", "45% 55% 40% 60%", "50%"]
        }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ width: 50, height: 50, background: '#01060fff' }}
      >
        <motion.div
          className="bot-eyes"
          animate={{ x: [-4, 4, -4, 0, 0], y: [1, -2, 1, 0, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ gap: '8px' }}
        >
          <motion.div
            className="bot-eye left"
            animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            style={{ width: 8, height: 12, borderRadius: '50%', background: '#fff' }}
          ></motion.div>
          <motion.div
            className="bot-eye right"
            animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            style={{ width: 8, height: 12, borderRadius: '50%', background: '#fff' }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
