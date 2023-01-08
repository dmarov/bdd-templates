export class FunctionExpression {
  private static readonly fnRegex = '^\nfunction\\(x\\)\\s\\{\\n(.*)\\n\\}$';

  readonly body: string;

  private constructor(body: string) {
    this.body = body;
  }

  static fromString(exp: string): FunctionExpression {
    const result = exp.match(new RegExp(this.fnRegex));

    if (!result) {
      throw new Error('Function parsing error');
    }

    return new FunctionExpression(result[1]);
  }
}
