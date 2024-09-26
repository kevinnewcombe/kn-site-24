'use client'
/**
 * Button for toggling light / dark mode
 */

/* there's a wierd jump that happens when the page loads with dark mode */
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import './btncolorscheme.scss'

const coords = (deg:number, shapeSize:number, radius:number) => {
  const radians = (180 - deg) * Math.PI/180;
  return `${((radius * Math.sin(radians) + radius) + shapeSize)} ${((radius * Math.cos(radians) + radius) + shapeSize)}`
}


const BtnColorScheme: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const transitionDuration = 250;
  const {theme, setTheme } = useTheme(); // returns either 'light', 'dark', or 'system'
  const [progress, setProgress] = useState<number>(-1);
  const [progressTarget, setProgressTarget] = useState<number>(-1);
  useEffect(() => {
    setProgress( theme === 'dark' ? 0 : 1 );
		setMounted(true);
	}, []);


  const toggleTheme = () =>{
    const currentTheme = theme;
    setTheme( currentTheme === 'dark' ? 'light' : 'dark' );
    setProgressTarget(currentTheme === 'dark' ? 1 : 0 );
    let start = Date.now();
    const playAnimation = () =>{
      const interval = Date.now() - start;
      setProgress(Math.min(1, Math.max((currentTheme === 'dark') ? (interval / transitionDuration) : 1 - (interval / transitionDuration), 0)));
      if(interval < transitionDuration){
        requestAnimationFrame(playAnimation);
      }
    }
    requestAnimationFrame(playAnimation);
  }

  const offsetDegrees = 45 * progress;
  const shapeSize = 8 + progress * 18;
  const outerRadius = 50 - shapeSize;
  const startCoords = coords(offsetDegrees, shapeSize, outerRadius);
  const endCoords = coords(90 - offsetDegrees, shapeSize, outerRadius);
  const innerRadius = 21 - (progress * 21);

  let d = `    
      M ${startCoords}
      A ${outerRadius} ${outerRadius} 0 1 0 ${endCoords}
      M ${startCoords}
      A ${innerRadius} ${innerRadius} 0 1 0 ${endCoords}
  `;

  if(progress === 1){ 
    d = `    
      M 50 ${shapeSize}
      A ${outerRadius} ${outerRadius} 0 1 0 ${100 - shapeSize} 50
      A ${outerRadius} ${outerRadius} 0 0 0 50 ${shapeSize}
      `;
  }

	if (!mounted) {
		return null;
	}
  return (

      <button 
        type="button" 
        className="btncolorscheme" 
        onClick={ toggleTheme } 
        aria-label="Toggle light and dark color scheme" 
        style={{strokeDashoffset: (progress * -40) }}
        >
        <svg viewBox="0 0 100 100" className="btncolorscheme__icon" role="img"> 
          <mask id="btncolorscheme__mask">
            <rect width="100" height="100" fill="#fff"/>
            <circle cx="50" cy="50" r="34" fill="#000" />
          </mask>
          <path d={ d } className="btncolorscheme__sphere"/>
          <g mask="url(#btncolorscheme__mask)" className="btncolorscheme__rays">
            <path d="M 50 50 L 0 50"/> 
            <path d="M 50 50 L 0 0"/> 
            <path d="M 50 50 L 0 100"/> 
            <path d="M 50 50 L 50 100"/> 
            <path d="M 50 50 L 100 100"/> 
            <path d="M 50 50 L 100 50"/> 
            <path d="M 50 50 L 100 0"/> 
            <path d="M 50 50 L 50 0"/> 
          </g>
        </svg>
      </button>
  );
}

export default BtnColorScheme;
