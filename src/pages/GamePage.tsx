import { useCallback, useState, type CSSProperties } from 'react';
import { ChallengeCard } from '../components/ChallengeCard';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { MuteButton } from '../components/MuteButton';
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
  const [confirmOpen, setConfirmOpen] = useState(false);

  const togglePlay = useCallback((id: number) => {
    setPlayingId((current) => (current === id ? null : id));
  }, []);
  const stop = useCallback(() => setPlayingId(null), []);

  function doReset() {
    setPlayingId(null);
    reset();
  }

  // Só pede confirmação se houver progresso a perder.
  // Tema completo reinicia direto: o troféu já está garantido.
  function handleResetClick() {
    if (score > 0 && !isComplete) setConfirmOpen(true);
    else doReset();
  }

  function handleConfirm() {
    setConfirmOpen(false);
    doReset();
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
          <MuteButton />
          <button
            type="button"
            className="btn btn-ghost"
            onClick={handleResetClick}
            disabled={score === 0}
          >
            ↺ Recomeçar
          </button>
        </div>
      </header>

      {isComplete && (
        <section className="victory">
          <span>🏆 Troféu conquistado! Você acertou todos!</span>
          <div className="victory-actions">
            <button type="button" className="btn btn-ghost" onClick={doReset}>
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

      <ConfirmDialog
        open={confirmOpen}
        emoji="↺"
        title="Recomeçar este tema?"
        message={`Seus ${score} acertos serão apagados e você começa do zero.`}
        confirmLabel="Sim, recomeçar"
        cancelLabel="Continuar jogando"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </main>
  );
}
