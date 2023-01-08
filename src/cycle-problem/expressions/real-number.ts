export class RealNumberExpression {
  /**
   * given:
   * a / b
   * matched:
   * [1]
   * a
   * [2]
   * b
  */
  private static regex = '^(\\d+)\\s\\/\\s(\\d+)$';

  readonly a: number;

  readonly b: number;

  private constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  static fromString(exp: string): RealNumberExpression {
    const result = exp.match(new RegExp(this.regex));

    if (!result) {
      throw new Error('Real number parsing error');
    }

    const a = parseInt(result[1], 10);
    const b = parseInt(result[2], 10);

    if (b === 0) {
      throw new Error('Real number parsing error');
    }

    return new RealNumberExpression(a, b);
  }
}
