import type { Lang } from '../i18n/lang';

export type Localized = Record<Lang, string>;

export interface Challenge {
  id: number;
  audioSrc: string;
  answer: string; // title in portuguese
  answerEn?: string; // English title, if different. Also accepted as an answer.
  aliases?: string[]; // Other accepted variations (abbreviations, alternative titles, etc.)
}
