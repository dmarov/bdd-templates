import { NormalizedGenerator } from '../normalized-generators/normalized-generator';
import { RangeGenerator } from '../range-generator/range-generator';

export class ArrayTransformGenerator {
  constructor(
    private readonly generator: () => NormalizedGenerator,
  ) { }

  generate(length: number): number[] {
    const rangeGen = new RangeGenerator(this.generator());
    const arr = Array.from({ length }).map((v, i) => i);

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i; j < arr.length; j += 1) {
        const k = rangeGen.generate(j, arr.length);

        const buf = arr[k];
        arr[k] = arr[j];
        arr[j] = buf;
      }
    }

    return arr;
  }
}
