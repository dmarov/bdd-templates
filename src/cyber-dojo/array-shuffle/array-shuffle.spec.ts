import { ArrayShuffle } from './array-shuffle';
import { dummyAlmostOneGenerator, dummyZeroGenerator } from './generators';

describe('array shuffle', () => {
  const variants2 = [
    [1, 2],
    [2, 1],
  ];

  const variants3 = [
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2],
    [2, 1, 3],
    [1, 3, 2],
    [3, 2, 1],
  ];

  it('should work correctly for array of one element using "dummy zero generator"', () => {
    const generator = dummyZeroGenerator;
    const instance = new ArrayShuffle(generator);
    const input = [1];

    const result = instance.shuffle(input);

    const expected = [1];

    expect(result).toEqual(expected);
  });

  it('should work correctly for array of two elements using "dummy almost one generator"', () => {
    const generator = dummyAlmostOneGenerator;
    const instance = new ArrayShuffle(generator);
    const input = [1, 2];

    const result = instance.shuffle(input);

    const expected = [1, 2];

    expect(result).toEqual(expected);
  });

  it('should work correctly for array of three elements using "dummy almost one generator"', () => {
    const generator = dummyAlmostOneGenerator;
    const instance = new ArrayShuffle(generator);
    const input = [1, 2, 3];

    const result = instance.shuffle(input);

    const expected = [1, 2, 3];

    expect(result).toEqual(expected);
  });
});
