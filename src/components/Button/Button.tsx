import type { ButtonProps } from './types';
import ButtonVariants from './buttonVariants';

const Button = ({
  variant = 'primary', href, children, icon, className = '', ...anchorProps
}: ButtonProps) => {

  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md font-semibold text-lg transition ${ButtonVariants[variant as keyof typeof ButtonVariants]} ${className}`} {...anchorProps}>
      <span>{children}</span>
      {icon}
    </a>
  );
};

export { Button };