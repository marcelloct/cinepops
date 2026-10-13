import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

/** "#/disney" → "disney" | "#/" or empty → "" */
const getSnapshot = () => window.location.hash.replace(/^#\/?/, '');

export function useHashRoute(): string {
  return useSyncExternalStore(subscribe, getSnapshot, () => '');
}
