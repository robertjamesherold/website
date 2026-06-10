const ArrowLeft = ({width="24px", height="24px", ...props}: React.SVGProps<SVGSVGElement>) => (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" overflow="visible" {...props} >
    <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
  </svg>
);

export default ArrowLeft;
