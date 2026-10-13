import type { Challenge } from './challenge';

export interface Theme {
  id: string;
  title: string;
  emoji: string;
  description: string;
  accent: string;
  challenges: Challenge[];
}
