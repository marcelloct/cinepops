import { useState, type ChangeEvent } from 'react';
import type { Challenge } from '../types/challenge';
import { displayAnswer, isCorrectAnswer } from '../utils/answer';
import { AudioPlayer } from './AudioPlayer';
import { playSuccess } from '../utils/sfx';
import { Confetti } from './Confetti';
import { useT } from '../i18n/useT';

interface Props {
  challenge: Challenge;
  index: number;
  isSolved: boolean;
  isPlaying: boolean;
  onTogglePlay: (id: number) => void;
  onStop: () => void;
  onSolve: (id: number) => void;
}

export function ChallengeCard({
  challenge,
  index,
  isSolved,
  isPlaying,
  onTogglePlay,
  onStop,
  onSolve,
}: Props) {
  const { t, lang } = useT();
  const [value, setValue] = useState('');
  const [justSolved, setJustSolved] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const next = e.target.value;
    setValue(next);

    if (isCorrectAnswer(next, challenge)) {
      setJustSolved(true);
      playSuccess();
      onSolve(challenge.id);
    }
  }

  const classes = ['card', isSolved && 'is-solved', justSolved && 'just-solved']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes}>
      <span className="card-index">{index + 1}</span>

      <AudioPlayer
        src={challenge.audioSrc}
        isPlaying={isPlaying}
        onToggle={() => onTogglePlay(challenge.id)}
        onStop={onStop}
      />

      <input
        type="text"
        className="card-input"
        placeholder={t.placeholder}
        aria-label={t.answerAria(index + 1)}
        value={isSolved ? displayAnswer(challenge, lang) : value}
        onChange={handleChange}
        readOnly={isSolved}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />

      {isSolved && (
        <span className="card-check" aria-hidden>
          ✓
        </span>
      )}
      {justSolved && <Confetti />}
    </li>
  );
}
