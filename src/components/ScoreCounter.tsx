import { useT } from '../i18n/useT';

interface Props {
  score: number;
  total: number;
}

export function ScoreCounter({ score, total }: Props) {
  const { t } = useT();
  return (
    <div className="score" role="status" aria-live="polite">
      <span
        key={score}
        className={score > 0 ? 'score-value bump' : 'score-value'}
      >
        {score}/{total}
      </span>
      <span className="score-label">{t.scoreLabel}</span>
    </div>
  );
}
