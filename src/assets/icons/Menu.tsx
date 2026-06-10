const Menu = ({width="24px", height="24px", ...props}: React.SVGProps<SVGSVGElement>) => (
   <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" overflow="visible" {...props} >
    <path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>
  </svg>
);

export default Menu;