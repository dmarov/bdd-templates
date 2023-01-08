import { FunctionExpression } from './expressions/function';
import { ForkFn } from './fork-fn';

export class Mapper {
  /**
   * given:
   * (a / b)
   * matched:
   * [1]
   * a
   * [2]
   * b
  */
  private static realNumberRegex = '(\\d+)\\s\\/\\s(\\d+)';

  /**
   * given:
   *   return (a / b) * x + (c / d);
   * matched:
   * [1]
   * a
   * [2]
   * b
   * [3]
   * c
   * [4]
   * d
  */
  private static readonly defaultReturnRegex = `^\\s*return\\s\\(${this.realNumberRegex}\\)\\s\\*\\sx\\s\\+\\s\\(${this.realNumberRegex}\\);$`;

  static parse(exp: string): ForkFn {
    const fn = FunctionExpression.fromString(exp);
    const bodyParseResult = fn.body.match(new RegExp(this.defaultReturnRegex));

    if (!bodyParseResult) {
      throw new Error('Function parsing error');
    }

    const a = parseInt(bodyParseResult[1], 10);
    const b = parseInt(bodyParseResult[2], 10);
    const c = parseInt(bodyParseResult[3], 10);
    const d = parseInt(bodyParseResult[4], 10);

    return {
      ifs: {},
      ifreturns: {},
      defaultReturn: { mul: [a, b], add: [c, d] },
    };
  }
}
