import type { Lang } from './lang';

const pt = {
  appTitle: 'Adivinhe o Filme',
  homeSub: 'Escolha um tema e ouça os trechos.',
  backToThemes: '← Temas',
  scoreLabel: 'acertos',
  restart: '↺ Recomeçar',
  placeholder: 'Qual é o filme?',
  answerAria: (n: number) => `Resposta do desafio ${n}`,
  play: 'Tocar trecho',
  stop: 'Parar trecho',
  muteSfx: 'Silenciar efeitos sonoros',
  unmuteSfx: 'Ativar efeitos sonoros',
  language: 'Idioma',
  trophyAria: 'Tema concluído',
  victory: '🏆 Troféu conquistado! Você acertou todos!',
  playAgain: 'Jogar de novo',
  otherThemes: 'Outros temas',
  resetTitle: 'Recomeçar este tema?',
  resetMessage: (n: number) =>
    n === 1
      ? 'Seu acerto será apagado e você começa do zero.'
      : `Seus ${n} acertos serão apagados e você começa do zero.`,
  resetConfirm: 'Sim, recomeçar',
  resetCancel: 'Continuar jogando',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
};

type Dictionary = typeof pt;

const en: Dictionary = {
  appTitle: 'Guess the Movie',
  homeSub: 'Pick a theme and listen to the clips.',
  backToThemes: '← Themes',
  scoreLabel: 'correct',
  restart: '↺ Restart',
  placeholder: "What's the movie?",
  answerAria: (n) => `Answer for challenge ${n}`,
  play: 'Play clip',
  stop: 'Stop clip',
  muteSfx: 'Mute sound effects',
  unmuteSfx: 'Unmute sound effects',
  language: 'Language',
  trophyAria: 'Theme completed',
  victory: '🏆 Trophy earned! You got them all!',
  playAgain: 'Play again',
  otherThemes: 'Other themes',
  resetTitle: 'Restart this theme?',
  resetMessage: (n) =>
    n === 1
      ? "Your correct answer will be erased and you'll start over."
      : `Your ${n} correct answers will be erased and you'll start over.`,
  resetConfirm: 'Yes, restart',
  resetCancel: 'Keep playing',
  confirm: 'Confirm',
  cancel: 'Cancel',
};

export const dictionary: Record<Lang, Dictionary> = { pt, en };
