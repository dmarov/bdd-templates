import { NormalizedGenerator } from './normalized-generator';

export class FromSequenceGenerator implements NormalizedGenerator {
  private i = 0;

  constructor(
    private readonly sequence: number[],
  ) {
    this.sequence.forEach((i) => {
      if (i < 0 || i >= 1) {
        throw new Error('invalid argument');
      }
    });
  }

  generate(): number {
    const res = this.sequence[this.i] ?? 0;
    this.i += 1;

    return res;
  }
}
