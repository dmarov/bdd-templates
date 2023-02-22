import { NormalizedGenerator } from '../normalized-generators/normalized-generator';
import { RangeGenerator } from '../range-generator/range-generator';

export class ArrayTransformGenerator {
  constructor(
    private readonly generator: () => NormalizedGenerator,
  ) { }

  generate(length: number): number[] {
    const rangeGen = new RangeGenerator(this.generator());
    const arr = Array.from({ length }).map((v, i) => i);

    for (let i = 0; i < arr.length - 1; i += 1) {
      const k = rangeGen.generate(i + 1, arr.length);

      const buf = arr[i];
      arr[i] = arr[k];
      arr[k] = buf;
    }

    return arr;
  }
}
