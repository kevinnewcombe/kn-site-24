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
  const transitionDuration = 2000;
  const {theme, setTheme } = useTheme();
  const [progress, setProgress] = useState<number>(-1);
  const [progressTarget, setProgressTarget] = useState<number>(-1);
  useEffect(() => {
    console.log( `theme: ${theme}` );
    setProgress( theme === 'light' ? 1 : 0 );
		setMounted(true);
	}, []);

  let start;
  let requestID: number;

  function toggleTheme(){
    // 0: moon / currently dark theme
    // 1: sun / currently light theme
    const currentTheme = theme;
    setTheme( currentTheme === 'light' ? 'dark' : 'light' );
    setProgressTarget(currentTheme === 'light' ? 0 : 1 );

    let start = Date.now();

    function playAnimation() {
      const interval = Date.now() - start;
      setProgress(Math.max(0, Math.min(1, progressTarget ? 1 - (interval / transitionDuration) : (interval / transitionDuration))));
      if(interval < transitionDuration){
        requestID = requestAnimationFrame(playAnimation);
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
    <>
      <div>
        progress : { Math.round( progress * 100 )}<br />
        progressTarget : {progressTarget} <br />
        theme: { theme }
      </div>
      <button 
        type="button" 
        className="btncolorscheme" 
        onClick={ toggleTheme } 
        aria-label="Toggle light and dark color scheme" 
        
        // style={{`--stroke-offset`: (progress * -40) } as CSSProperties}
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
    </>
    
  );
}

export default BtnColorScheme;
