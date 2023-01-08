import { LinearFnExpression } from './linear-fn';

describe('linear fn expression', () => {
  it('should linear function multiplier correctly', () => {
    const exp = '1 * x + 2';

    const fn = LinearFnExpression.fromString(exp);

    expect(fn.multiplier).toEqual('1');
  });

  it('should linear function addend correctly', () => {
    const exp = '1 * x + 2';

    const fn = LinearFnExpression.fromString(exp);

    expect(fn.added).toEqual('2');
  });

  it('should throw error on invalid argument', () => {
    const fn = () => {
      const exp = '1 * y + 2';

      LinearFnExpression.fromString(exp);
    };

    expect(fn).toThrowError();
  });
});
