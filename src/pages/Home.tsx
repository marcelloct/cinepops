import type { CSSProperties } from 'react';
import { themes } from '../data/themes';
import { loadSolved } from '../utils/storage';

export function Home() {
  return (
    <main className="app">
      <h1 className="home-title">🎬 Adivinhe o Filme</h1>
      <p className="home-sub">Escolha um tema e ouça os trechos.</p>

      <nav className="theme-grid">
        {themes.map((theme) => {
          const solved = loadSolved(theme.id);
          const done = theme.challenges.filter((c) => solved.has(c.id)).length;

          return (
            <a
              key={theme.id}
              href={`#/${theme.id}`}
              className="theme-card"
              style={{ '--accent': theme.accent } as CSSProperties}
            >
              <span className="theme-emoji">{theme.emoji}</span>
              <span className="theme-title">{theme.title}</span>
              <span className="theme-desc">{theme.description}</span>
              <span className="theme-progress">
                {done}/{theme.challenges.length}
              </span>
            </a>
          );
        })}
      </nav>
    </main>
  );
}
