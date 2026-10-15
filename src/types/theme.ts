import type { Lang } from '../i18n/lang';
import type { Challenge } from './challenge';

export type Localized = Record<Lang, string>;

export interface Theme {
  id: string;
  title: Localized;
  emoji: string;
  description: Localized;
  accent: string;
  challenges: Challenge[];
}
