import { NormalizedGenerator } from '../normalized-generators/normalized-generator';

export class RangeGenerator {
  constructor(
    private readonly generator: NormalizedGenerator,
  ) { }

  generate(min: number, max: number): number {
    return Math.floor((this.generator.generate() * (max - min)) + min);
  }
}
