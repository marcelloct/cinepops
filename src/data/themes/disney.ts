import type { Theme } from '../../types/theme';
import { audio } from './helpers';

const a = (n: number) => audio('disney', `${String(n).padStart(2, '0')}.mp3`);

export const disney: Theme = {
  id: 'disney',
  title: { pt: 'Clássicos da Disney', en: 'Disney Classics' },
  emoji: '🏰',
  description: {
    pt: 'Canções que marcaram a infância.',
    en: 'Songs that defined a childhood.',
  },
  accent: '#4cc9f0',
  challenges: [
    { id: 1, audioSrc: a(1), answer: 'O Rei Leão', answerEn: 'The Lion King' },
    {
      id: 2,
      audioSrc: a(2),
      answer: 'Frozen',
      aliases: ['Frozen Uma Aventura Congelante'],
    },
    {
      id: 3,
      audioSrc: a(3),
      answer: 'A Pequena Sereia',
      answerEn: 'The Little Mermaid',
    },
    { id: 4, audioSrc: a(4), answer: 'Aladdin' },
    { id: 5, audioSrc: a(5), answer: 'Toy Story' },
    {
      id: 6,
      audioSrc: a(6),
      answer: 'Moana',
      aliases: ['Moana Um Mar de Aventuras'],
    },
    {
      id: 7,
      audioSrc: a(7),
      answer: 'A Bela e a Fera',
      answerEn: 'Beauty and the Beast',
    },
    { id: 8, audioSrc: a(8), answer: 'Pocahontas' },
    { id: 9, audioSrc: a(9), answer: 'Mulan' },
    { id: 10, audioSrc: a(10), answer: 'Encanto' },
  ],
};
