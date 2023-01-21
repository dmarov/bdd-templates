import { ArrayTransform } from './array-transform';

describe('array transform', () => {
  it('should work correctly for array of one element and mirror transformatoin', () => {
    const input = [1];
    const transformation = [1];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [1];
    expect(result).toEqual(expected);
  });

  it('should work correctly for array of two elements and mirror transformatoin', () => {
    const input = [1, 2];
    const transformation = [1, 2];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [1, 2];
    expect(result).toEqual(expected);
  });
});
