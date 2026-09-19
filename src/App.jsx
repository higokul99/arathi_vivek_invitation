import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import MainInvitation from './components/MainInvitation';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
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
