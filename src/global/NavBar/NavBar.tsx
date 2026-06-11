import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@/assets/icons';
import { hooks } from '@/hooks';
import { MegaMenu } from '../MegaMenu';
import { NavBackdrop } from './NavBackdrop';
import type { MenuType } from '../MegaMenu/types';

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const route = pathname.replace(/^\//, '') || 'home';
  const isHome = route === 'home';

  const [prevRoute, setPrevRoute] = useState(route);
  if (route !== prevRoute) {
    setPrevRoute(route);
    setActiveMenu(null);
  }

  const { isDark, toggle: toggleTheme } = hooks.useTheme();

  const closeTimer = useRef<number | null>(null);
  const scrollYRef = useRef(0);
  // Pathname captured when the menu opened, so we can tell a plain close
  // (stay → restore scroll) apart from a close caused by navigating away.
  const lockedPathRef = useRef(pathname);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 180);
  };

  const openMenu = (m: MenuType) => {
    cancelClose();
    setActiveMenu(m);
  };

  const toggleMenu = (m: MenuType) => {
    cancelClose();
    setActiveMenu((cur) => (cur === m ? null : m));
  };

  useEffect(() => {
    if (activeMenu !== null) {
      scrollYRef.current = window.scrollY;
      lockedPathRef.current = pathname;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';

      // Only restore the locked scroll position when the menu closes on the
      // SAME page. If the menu closed because the user navigated to another
      // route, leave it to ScrollToTop so the new page starts at the top.
      if (pathname === lockedPathRef.current) {
        const html = document.documentElement;
        const prevBehavior = html.style.scrollBehavior;

        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollYRef.current);
        html.style.scrollBehavior = prevBehavior;
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [activeMenu, pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-2 border-b border-border-2">
        <div className="mx-auto max-w-440 px-6 sm:px-10 lg:px-20 py-4 flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();

              if (isHome) {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              } else {
                navigate('/');
              }
            }}
            aria-label="Robert James Herold — Startseite"
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <img
              src={isDark ? '/favicon-dark.svg' : '/favicon-light.svg'}
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
            />

            <span className="font-bold tracking-tight text-base sm:text-lg">
              Robert James Herold
            </span>
          </a>

          <ul className="hidden md:flex ml-auto gap-9 text-[15px] text-text-2 items-center">
            <li onMouseEnter={() => openMenu('projects')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleMenu('projects')}
                className={`hover:text-text-1 transition ${
                  activeMenu === 'projects' ? 'text-text-1' : ''
                }`}
                aria-expanded={activeMenu === 'projects'}
                aria-haspopup="menu"
              >
                Arbeitsproben
              </button>
            </li>

            <li onMouseEnter={() => openMenu('contact')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleMenu('contact')}
                className={`hover:text-text-1 transition ${
                  activeMenu === 'contact' ? 'text-text-1' : ''
                }`}
                aria-expanded={activeMenu === 'contact'}
                aria-haspopup="menu"
              >
                Kontakt
              </button>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="hidden md:flex ml-6 p-2 rounded-lg text-text-2 hover:text-text-1 hover:bg-bg-1-hover transition active:bg-bg-1-active"
            aria-label={isDark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
            title={isDark ? 'Heller Modus' : 'Dunkler Modus'}
          >
            {isDark ? <Icon.Sun /> : <Icon.Moon />}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="md:hidden ml-auto mr-2 p-2 rounded-lg text-text-2 hover:text-text-1 hover:bg-bg-1-hover transition active:bg-bg-1-active "
            aria-label={isDark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
            title={isDark ? 'Heller Modus' : 'Dunkler Modus'}
          >
            {isDark ? <Icon.Sun /> : <Icon.Moon />}
          </button>

          <button
            className="md:hidden text-text-1 p-2 -mr-2"
            onClick={() => setActiveMenu((cur) => (cur === null ? 'all' : null))}
            aria-label="Menu"
            aria-expanded={activeMenu !== null}
          >
            {activeMenu !== null ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>

        <MegaMenu
          type="projects"
          open={activeMenu === 'projects'}
          route={route}
          onClose={() => setActiveMenu(null)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />

        <MegaMenu
          type="contact"
          open={activeMenu === 'contact'}
          route={route}
          onClose={() => setActiveMenu(null)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />

        <MegaMenu
          type="all"
          open={activeMenu === 'all'}
          route={route}
          onClose={() => setActiveMenu(null)}
        />
      </nav>

      <NavBackdrop
        open={activeMenu !== null}
        onClose={() => setActiveMenu(null)}
      />
    </>
  );
};