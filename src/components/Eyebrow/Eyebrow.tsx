const Eyebrow = ({ num, label }: { num: string; label: string }) => (
  <div className="mono inline-flex items-center gap-3 sm:gap-4 tracking-[.18em] text-text-3 uppercase text-lg" >
    <span className="text-primary">{num}</span>
    <span>{label}</span>
  </div>
);

export { Eyebrow };