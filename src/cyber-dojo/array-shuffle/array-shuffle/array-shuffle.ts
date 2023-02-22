import { ArrayTransformGenerator } from '../array-transform-generator/array-transform-generator';
import { ArrayTransform } from '../array-transform/array-transform';
import { NormalizedGenerator } from '../normalized-generators/normalized-generator';

export class ArrayShuffle {
  constructor(
    private readonly generator: () => NormalizedGenerator,
  ) { }

  shuffle<T>(array: T[]): T[] {
    const transformGenerator = new ArrayTransformGenerator(this.generator);
    const transformation = transformGenerator.generate(array.length);

    return ArrayTransform.transform(array, transformation);
  }
}
