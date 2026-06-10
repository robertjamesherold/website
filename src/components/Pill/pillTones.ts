import type { PillTone } from './types';


const pillTones: Record<PillTone, string> = {
  primary: 'bg-primary/10 text-primary border-primary/35',
  secondary: 'bg-secondary/10 text-secondary border-secondary/35',
  critical: 'bg-critical/10 text-critical border-critical/35',
  high: 'bg-high/10 text-high border-high/35',
  medium: 'bg-medium/10 text-medium border-medium/35',
  low: 'bg-low/10 text-low border-low/35',
  warning: 'bg-warning/10 text-warning border-warning/30',
  performance: 'bg-performance/10 text-performance border-performance/35',
  quality: 'bg-quality/10 text-quality border-quality/35',
  security: 'bg-security/10 text-security border-security/35',
  error: 'bg-error/10 text-error border-error/35',
  info: 'bg-info/10 text-info border-info/35',
  success: 'bg-success/10 text-success border-success/35',   
};

export default pillTones;