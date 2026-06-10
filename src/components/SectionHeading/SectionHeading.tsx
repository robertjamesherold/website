import { Component } from '@/components/';

export const SectionHeading = ({
  num, label, title, sub, className = '',
}: { num: string; label: string; title: string; sub?: string; className?: string }) => (
  <div className={className}>
    <Component.Eyebrow num={num} label={label} />
    <h2 className="title mt-5 sm:mt-6">{title}</h2>
    {sub && <p className="text-xl text-text-2 mt-4 sm:mt-6 max-w-275">{sub}</p>}
  </div>
);
