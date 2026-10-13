import type { Theme } from '../../types/theme';
import { audio } from './helpers';

const a = (n: number) => audio('eighties', `${String(n).padStart(2, '0')}.mp3`);

export const eighties: Theme = {
  id: 'eighties',
  title: "80's",
  emoji: '📼',
  description: 'Trilhas sonoras de uma década inesquecível.',
  accent: '#ff9f1c',
  challenges: [
    {
      id: 1,
      audioSrc: a(1),
      answer: 'Dirty Dancing',
      aliases: ['Ritmo Quente'],
    },
    {
      id: 2,
      audioSrc: a(2),
      answer: 'Ghost',
      aliases: ['Ghost Do Outro Lado da Vida'],
    },
    { id: 3, audioSrc: a(3), answer: 'Rocky', aliases: ['Rocky III'] },
    {
      id: 4,
      audioSrc: a(4),
      answer: 'Top Gun',
      aliases: ['Top Gun Ases Indomáveis'],
    },
    {
      id: 5,
      audioSrc: a(5),
      answer: 'De Volta para o Futuro',
      aliases: ['Back to the Future'],
    },
    {
      id: 6,
      audioSrc: a(6),
      answer: 'Footloose',
      aliases: ['Footloose Ritmo Louco'],
    },
    { id: 7, audioSrc: a(7), answer: 'Flashdance' },
    {
      id: 8,
      audioSrc: a(8),
      answer: 'Os Caça-Fantasmas',
      aliases: ['Ghostbusters'],
    },
    {
      id: 9,
      audioSrc: a(9),
      answer: 'Karate Kid',
      aliases: ['Karatê Kid a Hora da Verdade'],
    },
    {
      id: 10,
      audioSrc: a(10),
      answer: 'Clube dos Cinco',
      aliases: ['The Breakfast Club'],
    },
  ],
};
