import type { CSSProperties } from 'react';

const COLORS = ['#ffd400', '#ff4d9d', '#4cc9f0', '#2ee59d', '#b388ff'];
const COUNT = 16;

const PIECES = Array.from({ length: COUNT }, (_, i) => ({
  angle: (360 / COUNT) * i,
  distance: 60 + (i % 3) * 20,
  color: COLORS[i % COLORS.length],
}));

export function Confetti() {
  return (
    <span className="confetti" aria-hidden>
      {PIECES.map((p, i) => (
        <i
          key={i}
          style={
            {
              '--angle': `${p.angle}deg`,
              '--dist': `${p.distance}px`,
              '--color': p.color,
            } as CSSProperties
          }
        />
      ))}
    </span>
  );
}
