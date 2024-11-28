import './footer.scss'
import Link from 'next/link';
/**
 * Site Footer
 */

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li><Link href="https://www.linkedin.com/in/kevinnewcombe/">LinkedIn</Link></li>
          <li><Link href="https://codepen.io/kevinnewcombe">CodePen</Link></li>
          <li><Link href="https://github.com/kevinnewcombe">Github</Link></li>
          <li><Link href="https://bsky.app/profile/kevinnewcombe.bsky.social">Bluesky</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
