import { ArrayTransform } from './array-transform';

describe('array transform', () => {
  it('should work correctly for array of one element', () => {
    const input = [1];
    const transformation = [1];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [1];
    expect(result).toEqual(expected);
  });
});
