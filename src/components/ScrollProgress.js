import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState("000");

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const p = Math.round(latest * 100);
      setPercentage(p.toString().padStart(3, '0'));
    });
  }, [scrollYProgress]);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-track">
        <motion.div 
          className="scroll-progress-fill"
          style={{ scaleY, transformOrigin: 'top' }}
        />
      </div>
      <div className="scroll-progress-text">
        {percentage}%
      </div>
    </div>
  );
};
