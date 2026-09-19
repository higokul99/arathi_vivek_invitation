import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RibbonSVG from './RibbonSVG';

const Envelope = ({ onOpen }) => {
  const [isUnfolded, setIsUnfolded] = useState(false);

  const handleOpen = () => {
    setIsUnfolded(true);
    // Add a slight delay to let the ribbon unfold before the envelope fades out
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <motion.div 
      className="envelope-container"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="envelope-card"
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
      >
        <div className="envelope-text">
          <h2 className="text-shimmer">Arathi & Vivek</h2>
          <p>ENGAGEMENT INVITATION</p>
        </div>
        
        <div className="ribbon-wrapper" style={{ position: 'absolute', top: '50%', left: '-10%', width: '120%', transform: 'translateY(-50%)', zIndex: 10, pointerEvents: 'none' }}>
          <RibbonSVG isUnfolded={isUnfolded} />
        </div>
        
        <div className="tap-to-open">
          TAP TO UNRIBBON
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
