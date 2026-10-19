import { useMuted } from '../hooks/useMuted';
import { useT } from '../i18n/useT';

export function MuteButton() {
  const [muted, toggle] = useMuted();
  const { t } = useT();
  const label = muted ? t.unmuteSfx : t.muteSfx;

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
