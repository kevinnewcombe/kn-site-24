import './header.scss'
import Link from 'next/link';
import BtnColorScheme from '@/components/atoms/btncolorscheme/BtnColorScheme';

/**
 * Site Header
 */

export const Header: React.FC<{}>= () => {
  return (
    <header className="header">
      <a href="#main" className="header__skiplink">Skip to Content</a>
      <Link href="/">
        <img src="/images/logo-full.svg" alt="Kevin Newcombe" width="200" height="26"/>
      </Link> 
      <nav className="header__nav">
        <Link href="/posts">Posts</Link>
      </nav>
      <div className="header__util">
        <BtnColorScheme inheritedTheme={ null } />
      </div>
    </header>
  );
}

export default Header;
