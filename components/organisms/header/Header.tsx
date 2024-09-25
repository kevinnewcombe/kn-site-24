import './header.scss'
import Link from 'next/link';

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
        {/* theme toggle button goes here */}
      </div>
    </header>
  );
}

export default Header;
