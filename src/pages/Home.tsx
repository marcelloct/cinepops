import type { CSSProperties } from 'react';
import { MuteButton } from '../components/MuteButton';
import { themes } from '../data/themes';
import { hasTrophy, loadSolved } from '../utils/storage';

export function Home() {
  const cards = themes.map((theme) => {
    const solved = loadSolved(theme.id);
    const done = theme.challenges.filter((c) => solved.has(c.id)).length;
    const total = theme.challenges.length;
    const trophy = hasTrophy(theme.id) || (total > 0 && done === total);
    return { theme, done, total, trophy };
  });

  const trophies = cards.filter((c) => c.trophy).length;

  return (
    <main className="app">
      <div className="toolbar">
        <MuteButton />
      </div>

      <h1 className="home-title">🎬 Adivinhe o Filme</h1>
      <p className="home-sub">
        Escolha um tema e ouça os trechos. · 🏆 {trophies}/{themes.length}
      </p>

      <nav className="theme-grid">
        {cards.map(({ theme, done, total, trophy }) => (
          <a
            key={theme.id}
            href={`#/${theme.id}`}
            className={`theme-card ${trophy ? 'has-trophy' : ''}`}
            style={{ '--accent': theme.accent } as CSSProperties}
          >
            {trophy && (
              <span className="trophy" role="img" aria-label="Tema concluído">
                🏆
              </span>
            )}
            <span className="theme-emoji">{theme.emoji}</span>
            <span className="theme-title">{theme.title}</span>
            <span className="theme-desc">{theme.description}</span>
            <span className="theme-progress">
              {done}/{total}
            </span>
          </a>
        ))}
      </nav>
    </main>
  );
}
