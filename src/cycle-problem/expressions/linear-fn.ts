export class LinearFnExpression {
  /**
   * given:
   * multiplier * x + added
   * matched:
   * [1]
   * multiplier
   * [2]
   * added
  */
  private static readonly regex = '^(.*)\\s\\*\\sx\\s\\+\\s(.*)$';

  readonly multiplier: string;

  readonly added: string;

  private constructor(multiplier: string, added: string) {
    this.multiplier = multiplier;
    this.added = added;
  }

  static fromString(exp: string): LinearFnExpression {
    const result = exp.match(new RegExp(this.regex));

    if (!result) {
      throw new Error('Linear fn parsing error');
    }

    const multiplier = result[1];
    const added = result[2];

    return new LinearFnExpression(multiplier, added);
  }
}
