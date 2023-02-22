import { ArrayTransform } from './array-transform';

describe('array transform', () => {
  it('should work correctly for array of one element and mirror transformation', () => {
    const input = [1];
    const transformation = [0];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [1];
    expect(result).toEqual(expected);
  });

  it('should work correctly for array of two elements and mirror transformation', () => {
    const input = [1, 2];
    const transformation = [0, 1];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [1, 2];
    expect(result).toEqual(expected);
  });

  it('should work correctly for array of two elements and reverse transformation', () => {
    const input = [1, 2];
    const transformation = [1, 0];

    const result = ArrayTransform.transform(input, transformation);

    const expected = [2, 1];
    expect(result).toEqual(expected);
  });
});
