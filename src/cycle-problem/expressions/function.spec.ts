import { FunctionExpression } from './function';

describe('function expression', () => {
  it('should parse function body correctly', () => {
    const exp = `
function(x) {
  return x;
}`;

    const fn = FunctionExpression.fromString(exp);

    const expected = '  return x;';

    expect(fn.body).toEqual(expected);
  });

  it('should throw error on invalid argument', () => {
    const fn = () => {
      const exp = `
unction(x) {
  return x;
}`;
      FunctionExpression.fromString(exp);
    };

    expect(fn).toThrowError();
  });
});
