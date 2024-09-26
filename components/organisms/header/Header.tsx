import './header.scss'
import Link from 'next/link';
import BtnColorScheme from '@/components/atoms/btncolorscheme/BtnColorScheme';

/**
 * Site Header
 */

export const Header: React.FC<{}>= () => {
  return (
    <header className="header">
      
      <Link href="/">
        <img src="/images/logo-full.svg" alt="Kevin Newcombe" />
      </Link> 
      <nav className="header__nav">
        <Link href="/posts">Posts</Link>
      </nav>
      <div className="header__util">
        <BtnColorScheme />
      </div>
    </header>
  );
}

export default Header;
