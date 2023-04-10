import { ProblemParams } from './problem-params';

export class FizzBuzz {
  static resolveFor(value: number, params: ProblemParams): string {
    let result = '';

    Object.entries(params.mapping)
      .forEach(([k, v]) => {
        if (value % parseInt(k, 10) === 0) {
          result += v;
        }
      });

    if (result.length !== 0) {
      return result;
    }

    return `${value}`;
  }
}
