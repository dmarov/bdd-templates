import { Generator } from './generators/generator';

export class Random {
  constructor(
    private readonly generator: Generator,
  ) { }

  generate(min: number, max: number): number {
    return (this.generator.generate() * (max - min)) + min;
  }
}
