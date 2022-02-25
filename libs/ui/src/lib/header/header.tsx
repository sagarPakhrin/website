import Link from 'next/link';
import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="sticky z-50 top-0 shadow bg-gray-800">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-2xl text-stone-200">
              <span className="text-gray-300">S</span>
              <span className="font-bold text-3xl text-orange-400">L</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-gray-300 text-sm">
          <a href="#experiences">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a
            href="https://drive.google.com/file/d/1sfkiSGbeWzTtpNznrE7e8xwhwyYtfD0t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-200 font-semibold"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
