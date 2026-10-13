import { useCallback, useState, type CSSProperties } from 'react';
import { ChallengeCard } from '../components/ChallengeCard';
import { ScoreCounter } from '../components/ScoreCounter';
import { useGame } from '../hooks/useGame';
import type { Theme } from '../types/theme';

interface Props {
  theme: Theme;
}

export function GamePage({ theme }: Props) {
  const { solved, markSolved, reset, round, score, total, isComplete } =
    useGame(theme.id, theme.challenges);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = useCallback((id: number) => {
    setPlayingId((current) => (current === id ? null : id));
  }, []);
  const stop = useCallback(() => setPlayingId(null), []);

  function handleReset() {
    const needsConfirm = score > 0 && !isComplete;
    if (
      needsConfirm &&
      !window.confirm('Recomeçar este tema? Seus acertos serão apagados.')
    ) {
      return;
    }
    setPlayingId(null);
    reset();
  }

  return (
    <main className="app" style={{ '--accent': theme.accent } as CSSProperties}>
      <header className="header">
        <a className="back" href="#/">
          ← Temas
        </a>
        <h1>
          {theme.emoji} {theme.title}
        </h1>
        <div className="header-right">
          <ScoreCounter score={score} total={total} />
          <button
            type="button"
            className="btn btn-ghost"
            onClick={handleReset}
            disabled={score === 0}
          >
            ↺ Recomeçar
          </button>
        </div>
      </header>

      {isComplete && (
        <section className="victory">
          <span>🎉 Você acertou todos!</span>
          <div className="victory-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleReset}
            >
              Jogar de novo
            </button>
            <a className="btn" href="#/">
              Outros temas
            </a>
          </div>
        </section>
      )}

      <ul className="grid">
        {theme.challenges.map((challenge, i) => (
          <ChallengeCard
            key={`${round}-${challenge.id}`}
            challenge={challenge}
            index={i}
            isSolved={solved.has(challenge.id)}
            isPlaying={playingId === challenge.id}
            onTogglePlay={togglePlay}
            onStop={stop}
            onSolve={markSolved}
          />
        ))}
      </ul>
    </main>
  );
}
