import { SetGen } from './set-gen';

export class Anagrams {
  static generate(word: string): string[] {
    const sets = SetGen.generate(word.length);

    const result: string[] = [];

    const chars = word.split('');

    sets.forEach((s) => {
      let newWord = '';

      s.forEach((i) => {
        newWord += chars[i];
      });

      result.push(newWord);
    });

    return Array.from(new Set(result));
  }
}
