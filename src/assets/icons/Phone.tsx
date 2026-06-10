const Phone = ({width="24px", height="24px", ...props}: React.SVGProps<SVGSVGElement>) => (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" overflow="visible" {...props} >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.37 1.88.72 2.77a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.31-1.31a2 2 0 0 1 2.11-.45c.89.35 1.82.59 2.77.72A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default Phone;