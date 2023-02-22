import { Generator } from './generators/generator';

export class ArrayShuffle {
  constructor(
    private readonly generator: Generator,
  ) { }

  shuffle<T>(array: T[]): T[] {
    return array;
  }
}
