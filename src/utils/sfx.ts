import { isMuted } from './settings';

let ctx: AudioContext | null = null;

const NOTES = [523.25, 659.25, 783.99, 1046.5]; // Dó, Mi, Sol, Dó (octave higher)

export function playSuccess() {
  if (isMuted()) return;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'suspended') void ctx.resume();

    const start = ctx.currentTime;
    NOTES.forEach((freq, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      const t = start + i * 0.07;

      osc.type = 'triangle';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);

      osc.connect(gain).connect(ctx!.destination);
      osc.start(t);
      osc.stop(t + 0.25);
    });
  } catch {
    /* If not supports Web Audio: the game proceed without sound */
  }
}
