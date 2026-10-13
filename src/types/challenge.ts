export interface Challenge {
  id: number;
  audioSrc: string;
  answer: string; // official title
  aliases?: string[]; // title alternatives
}
