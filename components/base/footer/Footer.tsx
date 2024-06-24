import './footer.scss'
import Link from 'next/link';
/**
 * Site Footer
 */

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li><Link href="https://www.linkedin.com/in/kevinnewcombe/">LinkedIn</Link></li>
          <li><Link href="https://codepen.io/kevinnewcombe">CodePen</Link></li>
          <li><Link href="https://github.com/kevinnewcombe">Github</Link></li>
          <li><Link href="mailto:ke%76%69n@%6Bev%69n-%6E%65%77com%62%65.com">Email</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
