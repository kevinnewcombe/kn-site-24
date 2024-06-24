import './header.scss'
import Link from 'next/link';

/**
 * Site Header
 */

export const Header: React.FC<{}>= () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo"><img src="/images/logo-full.svg" alt="Kevin Newcombe"/></Link>
      <nav className="header__nav">
        <ul>
          <li><Link href="/posts">Articles</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
