import { useMuted } from '../hooks/useMuted';

export function MuteButton() {
  const [muted, toggle] = useMuted();
  const label = muted ? 'Ativar efeitos sonoros' : 'Silenciar efeitos sonoros';

  return (
    <button
      type="button"
      className="btn btn-ghost btn-icon"
      onClick={toggle}
      aria-pressed={muted}
      aria-label={label}
      title={label}
    >
      <span aria-hidden>{muted ? '🔇' : '🔊'}</span>
    </button>
  );
}
