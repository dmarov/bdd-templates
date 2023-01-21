import { GeneratorFn } from './generator-fn';

export class ArrayShuffle {
  constructor(
    private readonly generator: GeneratorFn,
  ) { }

  shuffle<T>(array: T[]): T[] {
    return array;
  }
}
