import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Envelope from './components/Envelope';
import MainInvitation from './components/MainInvitation';
import bgmFile from './assets/rabba_rabba_bgm_faded.mp3';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay blocked or failed:', e));
    }
  };

  const handleOpen = () => {
    setIsOpened(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={bgmFile} loop preload="auto" />

      <AnimatePresence>
        {!isOpened && (
          <Envelope key="envelope" onOpen={handleOpen} onInteract={handlePlayAudio} />
        )}
      </AnimatePresence>

      {isOpened && (
        <>
          <button className="mute-button" onClick={toggleMute} aria-label="Toggle sound">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <MainInvitation />
        </>
      )}
    </div>
  );
}

export default App;
