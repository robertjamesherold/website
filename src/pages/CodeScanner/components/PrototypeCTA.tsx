import { useEffect, useState } from 'react';
import { hooks } from '@/hooks';
import { Icon } from '@/assets/icons';

/** Where the interactive CodeScanner prototype is deployed. */
const APP_URL = 'https://codescanner.robertjamesherold.com';

const actionBase =
  'inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md font-semibold text-lg transition';

/**
 * "Prototyp testen" trigger + choice dialog.
 *
 * Opening the dialog lets the visitor either view the prototype in the browser
 * or install it as an app. Note: a PWA can only be installed from its OWN
 * origin, so we can't fire the install prompt from the portfolio here. Instead
 * "Als App installieren" opens the app with `?install=1`; the app itself reads
 * that flag and triggers its stored `beforeinstallprompt` (see the snippet that
 * needs to live in the codescanner app). The browser's own install
 * confirmation always shows — that can't be skipped.
 */
export const PrototypeCTA = ({ className = '' }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const { mounted, visible } = hooks.useEnterExit(open, 200);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const openApp = (install: boolean) => {
    window.open(install ? `${APP_URL}/?install=1` : APP_URL, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${actionBase} w-full bg-primary text-white border border-primary hover:bg-primary-hover active:bg-primary-pressed ${className}`}
      >
        <span>Prototypen testen</span>
        <Icon.ArrowRight width="18px" height="18px" />
      </button>

      {mounted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="CodeScanner Prototyp öffnen"
          className={`fixed inset-0 z-[60] flex items-center justify-center p-6 transition-opacity duration-200 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-bg/60 backdrop-blur-sm"
          />

          <div
            className={`relative w-full max-w-md rounded-md border border-border-2 bg-bg-2 p-7 sm:p-8 shadow-[var(--shadow-pop)] transition-all duration-200 ${
              visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-[0.98]'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              className="absolute top-4 right-4 p-2 rounded-lg text-text-3 hover:text-text-1 hover:bg-bg-1-hover transition"
            >
              <Icon.Close width="20px" height="20px" />
            </button>

            <div className="mono text-[11px] tracking-[.22em] text-text-3 uppercase">
              CodeScanner Prototyp
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-text-1">
              Wie möchtest du starten?
            </h3>
            <p className="mt-3 text-text-2 leading-snug">
              Den interaktiven Prototyp direkt im Browser öffnen — oder als App auf deinem Gerät
              installieren.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openApp(false)}
                className={`${actionBase} w-full bg-primary text-white border border-primary hover:bg-primary-hover active:bg-primary-pressed`}
              >
                <span>Im Browser ansehen</span>
                <Icon.ArrowRight width="18px" height="18px" />
              </button>
              <button
                type="button"
                onClick={() => openApp(true)}
                className={`${actionBase} w-full bg-transparent text-secondary border border-secondary hover:bg-secondary-hover/10 active:bg-secondary-pressed/20`}
              >
                <Icon.Download width="18px" height="18px" />
                <span>Als App installieren</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
