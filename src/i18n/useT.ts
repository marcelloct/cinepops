import { useSyncExternalStore } from 'react';
import { dictionary } from './dictionary';
import { getLang, setLang, subscribeLang, type Lang } from './lang';

export function useLang() {
  const lang = useSyncExternalStore(subscribeLang, getLang, (): Lang => 'pt');
  return [lang, setLang] as const;
}

export function useT() {
  const [lang] = useLang();
  return { t: dictionary[lang], lang };
}
