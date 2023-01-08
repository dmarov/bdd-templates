import { RealNumberExpression } from './real-number';

describe('real number expression', () => {
  it('should parse real number divident correctly', () => {
    const exp = '1 / 2';

    const fn = RealNumberExpression.fromString(exp);

    expect(fn.a).toEqual(1);
  });

  it('should parse real number divisor correctly', () => {
    const exp = '1 / 2';

    const fn = RealNumberExpression.fromString(exp);

    expect(fn.b).toEqual(2);
  });

  it('should throw error on invalid argument', () => {
    const fn = () => {
      const exp = '/ 2';

      RealNumberExpression.fromString(exp);
    };

    expect(fn).toThrowError();
  });

  it('should throw error divisor is zero', () => {
    const fn = () => {
      const exp = '1 / 0';

      RealNumberExpression.fromString(exp);
    };

    expect(fn).toThrowError();
  });
});
