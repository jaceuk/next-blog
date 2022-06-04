import * as React from 'react';
import { motion, Variants } from 'framer-motion';

interface IProps {
  children: React.ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function SlideUp({ children }: IProps) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}
