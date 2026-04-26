'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHidden, setIsHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main glow effect - largest layer */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full pointer-events-none z-[9999] blur-3xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHidden ? 0 : [1, 1.2, 1],
          opacity: isHidden ? 0 : [0.3, 0.5, 0.3],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Secondary glow layer */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 bg-cyan-400/15 rounded-full pointer-events-none z-[9999] blur-2xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHidden ? 0 : [1.2, 1, 1.2],
          opacity: isHidden ? 0 : [0.4, 0.6, 0.4],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
      />

      {/* Core bright spot */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full pointer-events-none z-[9999] blur-xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHidden ? 0 : [1, 1.3, 1],
          opacity: isHidden ? 0 : 0.7,
        }}
        transition={{
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </>
  );
}
