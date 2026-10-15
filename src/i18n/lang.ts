export type Lang = 'pt' | 'en';

const KEY = 'movies:lang';
const listeners = new Set<() => void>();

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* unavailable storage: cai na detecção abaixo */
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

let lang: Lang = detect();

export const getLang = () => lang;

export function setLang(next: Lang) {
  if (next === lang) return;
  lang = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    /* No persistency, but the choice stands in session */
  }
  listeners.forEach((notify) => notify());
}

export function subscribeLang(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
