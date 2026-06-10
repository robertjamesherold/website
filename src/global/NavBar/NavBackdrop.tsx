/** Apple-style page blur behind the open mega menu. Click to close. */
export const NavBackdrop = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <div
    aria-hidden="true"
    onClick={onClose}
    className={`fixed inset-0 z-40 bg-bg/30 backdrop-blur-sm transition-opacity duration-300 ${
      open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}
  />
);
