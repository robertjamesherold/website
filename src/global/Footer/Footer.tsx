import { Link } from 'react-router-dom';
import { hooks } from '@/hooks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = hooks.useTheme();

  return (
    <footer className="border-t border-border-2 bg-bg-2">
      <div className="mx-auto max-w-[1760px] px-6 sm:px-10 lg:px-20 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-text-3 text-[14px]">
            <img
              src={isDark ? '/favicon-dark.svg' : '/favicon-light.svg'}
              alt=""
              aria-hidden="true"
              data-no-zoom
              width={24}
              height={24}
              className="w-6 h-6 shrink-0"
            />
            <span>&copy; {currentYear} Robert James Herold. All rights reserved.</span>
          </div>

          <nav className="flex items-center gap-6 text-[14px]">
            <Link
              to="/docs/lebenslauf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lebenslauf als PDF in neuem Tab öffnen"
              className="text-text-3 hover:text-text-1 transition"
            >
              Lebenslauf (PDF)
            </Link>
            <Link
              to="/impressum"
        className="text-text-3 hover:text-text-1 transition"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              
              className="text-text-3 hover:text-text-1 transition"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export { Footer };