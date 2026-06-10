import { useSyncExternalStore } from 'react';
import { themeStore, type ThemePreference } from '@/theme/theme';

/**
 * Subscribes to the shared theme store. Returns the resolved `isDark` flag, the
 * raw `preference` ('light' | 'dark' | 'system'), and actions to change it.
 *
 * `toggle` flips to an explicit override; use it for a simple light/dark
 * switch. `setPreference('system')` hands control back to the OS.
 */
export const useTheme = () => {
  const isDark = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getIsDark,
    themeStore.getIsDark,
  );
  const preference = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getPreference,
    themeStore.getPreference,
  );

  return {
    isDark,
    preference: preference as ThemePreference,
    toggle: themeStore.toggle,
    setPreference: themeStore.setPreference,
  };
};
