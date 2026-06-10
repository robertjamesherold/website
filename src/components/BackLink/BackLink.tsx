import { Link } from 'react-router-dom';

const BackLink = () => (
  <Link
    to="/"
    
    className="inline-flex items-center gap-2 mono text-[11px] sm:text-[12px] tracking-[.18em] text-text-3 hover:text-text-1 transition uppercase"
  >
    <span aria-hidden>←</span>
    <span>Zur Übersicht</span>
  </Link>
);

export { BackLink };