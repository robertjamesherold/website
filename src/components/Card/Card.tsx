const Card = ({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`card-base p-7 ${className}`}>{children}</div>
);

export { Card };