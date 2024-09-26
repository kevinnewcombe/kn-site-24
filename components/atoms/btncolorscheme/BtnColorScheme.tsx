'use client'
/**
 * Button for toggling light / dark mode
 */
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import './btncolorscheme.scss'


const BtnColorScheme: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme } = useTheme();
  const [progress, setProgress] = useState<number>(theme === 'dark' ? 1 : 0);
  useEffect(() => {
		setMounted(true);
	}, []);
  function toggleTheme(){
    setTheme( theme === 'light' ? 'dark' : 'light' );
  }

  let d = `
    M 50 8 
    A 42 42 0 1 0 92 50 
    M 50 8 
    A 21 21 0 1 0 92 50
  `;

  if(theme == 'dark'){
    d = `    
      M 50 26
      A 24 24 0 1 0 74 50
      A 24 24 0 0 0 50 26
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
      // style={{`--stroke-offset`: (progress * -40) } as CSSProperties}
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
