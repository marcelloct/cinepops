const key = (themeId: string) => `movies:solved:${themeId}`;

export function loadSolved(themeId: string): Set<number> {
  try {
    const raw = localStorage.getItem(key(themeId));
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return new Set(
      Array.isArray(parsed)
        ? parsed.filter((n): n is number => typeof n === 'number')
        : []
    );
  } catch {
    return new Set();
  }
}

export function saveSolved(themeId: string, solved: Set<number>) {
  try {
    localStorage.setItem(key(themeId), JSON.stringify([...solved]));
  } catch {
    /* No persistency, but the game still working */
  }
}

const trophyKey = (themeId: string) => `movies:trophy:${themeId}`;

export function hasTrophy(themeId: string): boolean {
  try {
    return localStorage.getItem(trophyKey(themeId)) === '1';
  } catch {
    return false;
  }
}

export function awardTrophy(themeId: string) {
  try {
    localStorage.setItem(trophyKey(themeId), '1');
  } catch {
    /* No persistency */
  }
}
