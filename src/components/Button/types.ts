type BtnVariant = 'primary' | 'primaryGhost' | 'primaryOutlined' | 'secondary' | 'secondaryGhost' | 'secondaryOutlined'  | 'critical' | 'criticalGhost' | 'criticalOutlined'  |  'high' | 'highGhost' | 'highOutlined'  |  'medium' | 'mediumGhost' | 'mediumOutlined'  | 'low' | 'lowGhost' | 'lowOutlined' | 'success' | 'successGhost' | 'successOutlined'   | 'warning' | 'warningGhost' | 'warningOutlined'    | 'info' | 'infoGhost' | 'infoOutlined'  | 'error' | 'errorGhost' | 'errorOutlined'  |  'performance' | 'performanceGhost' | 'performanceOutlined'  |  'quality' | 'qualityGhost' | 'qualityOutlined'  |  'accessibility' | 'accessibilityGhost' | 'accessibilityOutlined'  |  'security' | 'securityGhost' | 'securityOutlined ';
type ButtonAnchorProps = Pick<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'rel' | 'download' | 'aria-label'
>;

export type ButtonProps = React.PropsWithChildren<{
  variant?: BtnVariant;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}> &
  ButtonAnchorProps; 
