import { NormalizedGenerator } from '../normalized-generators/normalized-generator';
import { RangeIntegerGenerator } from '../range-integer-generator/range-integer-generator';

export class ArrayTransformGenerator {
  constructor(
    private readonly generator: () => NormalizedGenerator,
  ) { }

  generate(length: number): number[] {
    const rangeGen = new RangeIntegerGenerator(this.generator());
    const arr = Array.from({ length }).map((v, i) => i);

    for (let i = 0; i < arr.length - 1; i += 1) {
      const k = rangeGen.generate(i, arr.length);

      if (k !== i) {
        const buf = arr[i];
        arr[i] = arr[k];
        arr[k] = buf;
      }
    }

    return arr;
  }
}
