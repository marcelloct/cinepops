import { useCallback, useSyncExternalStore } from 'react';
import { isMuted, setMuted, subscribeMuted } from '../utils/settings';

export function useMuted() {
  const muted = useSyncExternalStore(subscribeMuted, isMuted, () => false);
  const toggle = useCallback(() => setMuted(!isMuted()), []);
  return [muted, toggle] as const;
}
