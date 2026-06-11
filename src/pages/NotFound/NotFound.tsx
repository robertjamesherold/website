import { Link } from 'react-router-dom';

const NotFound = () => (
  <main>
    <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 min-h-[60vh] flex flex-col justify-center">
      <p className="mono text-[11px] sm:text-[12px] tracking-[.18em] text-text-3 uppercase">
        Fehler 404
      </p>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-6">
        Seite nicht gefunden
      </h1>

      <p className="mt-6 max-w-[560px] text-text-2 text-[15px] sm:text-base leading-relaxed">
        Die von dir aufgerufene Seite existiert nicht oder wurde verschoben.
        Überprüfe die Adresse oder kehre zur Startseite zurück.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 mono text-[11px] sm:text-[12px] tracking-[.18em] text-text-3 hover:text-text-1 transition uppercase mt-10"
      >
        <span aria-hidden>←</span>
        Zur Startseite
      </Link>
    </section>
  </main>
);

export { NotFound };
