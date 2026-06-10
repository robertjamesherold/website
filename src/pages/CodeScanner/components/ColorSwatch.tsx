import { useEffect, useRef, useState } from 'react';
import { hooks } from '@/hooks';

const rgbToHex = (color: string) => {
  const parts = color.match(/\d+(\.\d+)?/g);
  if (!parts || parts.length < 3) return color;
  const [r, g, b] = parts.map(Number);
  return (
    '#' +
    [r, g, b]
      .map((n) => Math.round(n).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
};

/**
 * A single design-token swatch. The fill is driven by the CSS variable
 * (`token`), so it reflects the real value and switches automatically between
 * light/dark. The hex label is read back from the rendered color and refreshed
 * whenever the color scheme changes.
 */
export const ColorSwatch = ({ name, token }: { name: string; token: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState('');
  const { isDark } = hooks.useTheme();

  // Re-read whenever the token or the active theme changes (system *or* a
  // manual override), since the rendered value depends on both.
  useEffect(() => {
    if (ref.current) setHex(rgbToHex(getComputedStyle(ref.current).backgroundColor));
  }, [token, isDark]);

  return (
    <div className="flex flex-col gap-1.5">
      <div
        ref={ref}
        className="w-full aspect-[1.4/1] rounded-md border border-border-2"
        style={{ background: `var(${token})` }}
      />
      <span className="text-[12px] text-text-2 leading-snug">
        {name}
        <br />
        <span className="mono text-[10.5px] text-text-3">{hex || token}</span>
      </span>
    </div>
  );
};
