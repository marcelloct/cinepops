import { useEffect, useRef, type MouseEvent, type SyntheticEvent } from 'react';
import { useT } from '../i18n/useT';

interface Props {
  open: boolean;
  emoji?: string;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  emoji = '❓',
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: Props) {
  const { t } = useT();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleCancel(e: SyntheticEvent<HTMLDialogElement>) {
    e.preventDefault(); // quem fecha é o estado do pai
    onCancel();
  }

  function handleBackdropClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target === e.currentTarget) onCancel();
  }

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className="dialog-body">
        <span className="dialog-emoji" aria-hidden>
          {emoji}
        </span>
        <h2 id="dialog-title">{title}</h2>
        <p id="dialog-message">{message}</p>

        <div className="dialog-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onCancel}
            autoFocus
          >
            {cancelLabel ?? t.cancel}
          </button>
          <button type="button" className="btn btn-danger" onClick={onConfirm}>
            {confirmLabel ?? t.confirm}
          </button>
        </div>
      </div>
    </dialog>
  );
}
