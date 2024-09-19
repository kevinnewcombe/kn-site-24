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

    </header>
  );
}

export default Header;
