interface Props {
  score: number;
  total: number;
}

export function ScoreCounter({ score, total }: Props) {
  return (
    <div className="score" role="status" aria-live="polite">
      <span
        key={score}
        className={score > 0 ? 'score-value bump' : 'score-value'}
      >
        {score}/{total}
      </span>
      <span className="score-label">acertos</span>
    </div>
  );
}
