import React from 'react';

const RibbonSVG = ({ isUnfolded }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" width="100%" height="100%" className={`ribbon-svg-wrapper ${isUnfolded ? 'unfolded' : ''}`}>
      <defs>
        {/* Soft Shadows */}
        <filter id="ribbon-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1a1a24" floodOpacity="0.22" />
        </filter>

        <filter id="knot-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Horizontal Ribbon Gradients */}
        <linearGradient id="band-grad-left" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#f0f1f5" />
          <stop offset="70%" stopColor="#d9dce3" />
          <stop offset="100%" stopColor="#b6bac6" />
        </linearGradient>

        <linearGradient id="band-grad-right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#eff1f4" />
          <stop offset="70%" stopColor="#d6d9e2" />
          <stop offset="100%" stopColor="#b3b7c4" />
        </linearGradient>

        {/* Bow Loops & Tails Gradients */}
        <linearGradient id="loop-left-grad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e2e5ec" />
          <stop offset="85%" stopColor="#a4abbc" />
          <stop offset="100%" stopColor="#737b8c" />
        </linearGradient>

        <linearGradient id="loop-right-grad" x1="100%" y1="0%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e2e5ec" />
          <stop offset="85%" stopColor="#a4abbc" />
          <stop offset="100%" stopColor="#737b8c" />
        </linearGradient>

        <linearGradient id="tail-left-grad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#9ea4b4" />
          <stop offset="30%" stopColor="#e6e8ee" />
          <stop offset="75%" stopColor="#fcfdff" />
          <stop offset="100%" stopColor="#cacedb" />
        </linearGradient>

        <linearGradient id="tail-right-grad" x1="80%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#9ea4b4" />
          <stop offset="30%" stopColor="#e6e8ee" />
          <stop offset="75%" stopColor="#fcfdff" />
          <stop offset="100%" stopColor="#cacedb" />
        </linearGradient>

        <linearGradient id="knot-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#808798" />
          <stop offset="25%" stopColor="#f5f6f9" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#d4d7e1" />
          <stop offset="100%" stopColor="#7a8292" />
        </linearGradient>
      </defs>

      {/* Interactive Ribbon Group */}
      <g className="ribbon-interactive-group">
        {/* Left Horizontal Band */}
        <path className="anim-part band-l" 
              d="M 0,95 L 485,98 C 485,125 485,130 485,152 L 0,150 Z" 
              fill="url(#band-grad-left)" 
              filter="url(#ribbon-shadow)" />

        {/* Right Horizontal Band */}
        <path className="anim-part band-r" 
              d="M 515,98 L 1000,95 L 1000,150 L 515,152 Z" 
              fill="url(#band-grad-right)" 
              filter="url(#ribbon-shadow)" />

        {/* Tails / Drooping Ends */}
        <g filter="url(#ribbon-shadow)">
          {/* Left Tail */}
          <path className="anim-part tail-l" 
                d="M 480,132 C 455,160 415,200 378,245 L 440,215 L 484,152 Z" 
                fill="url(#tail-left-grad)" />

          {/* Right Tail */}
          <path className="anim-part tail-r" 
                d="M 520,132 C 545,160 585,200 622,245 L 560,215 L 516,152 Z" 
                fill="url(#tail-right-grad)" />
        </g>

        {/* Bow Loops */}
        <g filter="url(#ribbon-shadow)">
          {/* Left Loop */}
          <path className="anim-part loop-l" 
                d="M 488,118 C 465,80 405,55 382,62 C 360,70 378,140 405,145 C 438,150 472,132 488,124 Z" 
                fill="url(#loop-left-grad)" />

          {/* Right Loop */}
          <path className="anim-part loop-r" 
                d="M 512,118 C 535,80 595,55 618,62 C 640,70 622,140 595,145 C 562,150 528,132 512,124 Z" 
                fill="url(#loop-right-grad)" />

          {/* Loop Highlights (Silky Creases) */}
          <path className="anim-part loop-l" 
                d="M 485,122 C 450,95 405,72 388,72 C 378,76 385,108 412,130 C 445,145 475,130 485,122 Z" 
                fill="#ffffff" opacity="0.45" />

          <path className="anim-part loop-r" 
                d="M 515,122 C 550,95 595,72 612,72 C 622,76 615,108 588,130 C 555,145 525,130 515,122 Z" 
                fill="#ffffff" opacity="0.45" />
        </g>

        {/* Center Knot */}
        <g filter="url(#knot-shadow)">
          <rect className="anim-part knot" 
                x="482" y="104" width="36" height="36" rx="7" ry="6" 
                fill="url(#knot-grad)" />
          {/* Knot Crease Highlight */}
          <path className="anim-part knot" 
                d="M 494,106 Q 500,122 494,138 Q 503,122 503,106 Z" 
                fill="#ffffff" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
};

export default RibbonSVG;
