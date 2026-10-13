import type { Theme } from '../../types/theme';
import { disney } from './disney';
import { eighties } from './eighties';

export const themes: Theme[] = [disney, eighties];

export const getTheme = (id: string): Theme | undefined =>
  themes.find((t) => t.id === id);
