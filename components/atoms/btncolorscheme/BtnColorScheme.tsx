'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Button for toggling light / dark mode
 */
import './btncolorscheme.scss'
const BtnColorScheme: React.FC<{isLightMode:boolean}>= ({isLightMode}) => {
  const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
  function toggleTheme(){
    setTheme( theme === 'light' ? 'dark' : 'light' );
  }

  return (
    <button className="btncolorscheme" onClick={ toggleTheme }>
      Switch to { isLightMode ? 'dark' : 'light' } mode
      { mounted ? 'mounted' : 'not mounted'}
    </button>
  );
}

export default BtnColorScheme;
