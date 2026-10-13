import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Challenge } from '../types/challenge';
import { awardTrophy, loadSolved, saveSolved } from '../utils/storage';

export function useGame(themeId: string, challenges: Challenge[]) {
  const [solved, setSolved] = useState<Set<number>>(() => loadSolved(themeId));

  /** Change after each reset. Used in `key` from cards to clean the typed text. */
  const [round, setRound] = useState(0);

  useEffect(() => {
    saveSolved(themeId, solved);
  }, [themeId, solved]);

  const markSolved = useCallback((id: number) => {
    setSolved((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }, []);

  const reset = useCallback(() => {
    setSolved(new Set());
    setRound((r) => r + 1);
  }, []);

  // Count only IDs that still exists in theme (protects against old data in storage)
  const score = useMemo(
    () => challenges.filter((c) => solved.has(c.id)).length,
    [challenges, solved]
  );

  const total = challenges.length;
  const isComplete = total > 0 && score === total;

  useEffect(() => {
    if (isComplete) awardTrophy(themeId);
  }, [isComplete, themeId]);

  return {
    solved,
    markSolved,
    reset,
    round,
    score,
    total,
    isComplete,
  };
}
