import { Block } from './block';

export class AbcProblem {
  private static readonly blocks: Block[] = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['T', 'G'],
    ['Q', 'D'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['A', 'N'],
    ['O', 'B'],
    ['E', 'R'],
    ['F', 'S'],
    ['L', 'Y'],
    ['P', 'C'],
    ['Z', 'M'],
  ];

  static resolve(word: string): boolean {
    const letters = word.toUpperCase().split('');
    const availableBlocks = [...this.blocks];
    let result = true;

    letters.forEach((letter) => {
      const index = availableBlocks.findIndex((b) => b[0] === letter || b[1] === letter);

      if (index === -1) {
        result = false;
      } else {
        availableBlocks.splice(index, 1);
      }
    });

    return result;
  }
}
