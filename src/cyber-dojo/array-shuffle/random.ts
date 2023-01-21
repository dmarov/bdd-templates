export class Random {
  constructor(
    private readonly normalizedGenerator: () => number,
  ) { }

  generate(min: number, max: number): number {
    return (this.normalizedGenerator() * (max - min)) + min;
  }
}
