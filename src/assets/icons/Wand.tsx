const Wand = ({width="24px", height="24px", ...props}: React.SVGProps<SVGSVGElement>) => (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" overflow="visible" {...props} >
    <path d="m7 21-4.348-4.348a2 2 0 0 1 0-2.828l14.142-14.142a2 2 0 0 1 2.828 0l4.348 4.348a2 2 0 0 1 0 2.828L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>
  </svg>
);

export default Wand;