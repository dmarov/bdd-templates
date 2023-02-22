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
      for (let j = i + 1; j < arr.length; j += 1) {
        const rnd = rangeGen.generate(0, 2);

        if (rnd === 1) {
          const buf = arr[i];
          arr[i] = arr[j];
          arr[j] = buf;
        }
      }
    }

    return arr;
  }
}
