import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  isPlaying: boolean;
  onToggle: () => void;
  onStop: () => void;
}

export function AudioPlayer({ src, isPlaying, onToggle, onStop }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(onStop); // ex.: arquivo ausente ou autoplay bloqueado
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying, onStop]);

  return (
    <>
      <button
        type="button"
        className={`play-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Parar trecho' : 'Tocar trecho'}
      >
        {isPlaying ? '■' : '▶'}
      </button>
      <audio ref={audioRef} src={src} preload="metadata" onEnded={onStop} />
    </>
  );
}
