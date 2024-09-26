'use client'
/**
 * Button for toggling light / dark mode
 */
import './btncolorscheme.scss'
const BtnColorScheme: React.FC<{isLightMode:boolean}>= ({isLightMode}) => {
  return (
    <button className="btncolorscheme">
      Switch to { isLightMode ? 'dark' : 'light' } mode
    </button>
  );
}

export default BtnColorScheme;
