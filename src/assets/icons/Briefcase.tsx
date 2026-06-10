const Briefcase = ({width="24px", height="24px", ...props}: React.SVGProps<SVGSVGElement>) => (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" overflow="visible" {...props} >
    <path d="M6 14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2l2 2h6a2 2 0 0 1 2 2v1"/>
    <path d="M2 13h20l-2.45 7.34A2 2 0 0 1 17.65 22H6.35a2 2 0 0 1-1.9-1.66Z"/>
  </svg>
);

export default Briefcase;