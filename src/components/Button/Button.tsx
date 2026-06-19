import { Link } from 'react-router-dom';
import type { ButtonProps } from './types';
import ButtonVariants from './buttonVariants';

const Button = ({
  variant = 'primary', href, children, icon, className = '', ...anchorProps
}: ButtonProps) => {
  const classes = `inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md font-semibold text-lg transition ${ButtonVariants[variant as keyof typeof ButtonVariants]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  // Internal route / in-page hash links navigate client-side so the SPA doesn't
  // do a full page reload (which re-downloads the bundle and re-inits React,
  // Lenis, etc. — the long "loading" the user sees). External protocols
  // (mailto:/tel:/http), file downloads and new-tab links (target/download set,
  // e.g. the PDF) stay plain anchors.
  const isInternal =
    !!href &&
    (href.startsWith('/') || href.startsWith('#')) &&
    !anchorProps.target &&
    !anchorProps.download;

  if (isInternal) {
    return (
      <Link to={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...anchorProps}>
      {content}
    </a>
  );
};

export { Button };
