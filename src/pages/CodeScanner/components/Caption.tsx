/** Small muted caption under figures / card groups. */
export const Caption = ({
  children,
  center = false,
}: React.PropsWithChildren<{ center?: boolean }>) => (
  <p
    className={`text-text-3 text-sm leading-relaxed max-w-225 mt-6 sm:mt-8 ${
      center ? 'mx-auto text-center' : ''
    }`}
  >
    {children}
  </p>
);
