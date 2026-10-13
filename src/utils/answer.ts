import type { Challenge } from '../types/challenge';

const LEADING_ARTICLES = /^(o|a|os|as|um|uma|the)\s+/;

export function normalizeText(text: string): string {
  const base = text
    .normalize('NFD') // separa letra + acento
    .replace(/[\u0300-\u036f]/g, '') // remove os acentos
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ') // pontuação vira espaço ("Toy-Story" → "toy story")
    .replace(/\s+/g, ' ')
    .trim();

  const withoutArticle = base.replace(LEADING_ARTICLES, '');
  // Evita zerar títulos que são só o artigo
  return withoutArticle || base;
}

export function isCorrectAnswer(input: string, challenge: Challenge): boolean {
  const typed = normalizeText(input);
  if (!typed) return false;

  return [challenge.answer, ...(challenge.aliases ?? [])].some(
    (candidate) => normalizeText(candidate) === typed
  );
}
