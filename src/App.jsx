import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import MainInvitation from './components/MainInvitation';
import bgmFile from './assets/rabba_rabba_bgm.mp3';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(bgmFile);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked or failed:', e));
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {!isOpened && (
          <Envelope key="envelope" onOpen={handleOpen} />
        )}
      </AnimatePresence>
      
      {isOpened && (
        <MainInvitation />
      )}
    </div>
  );
}

export default App;
