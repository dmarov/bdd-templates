import { ArrayShuffle } from './array-shuffle';
import { FromSequenceGenerator } from './generators/from-sequence';

describe('array shuffle', () => {
  it('should work correctly for array of one element using "dummy zero generator"', () => {
    const generator = new FromSequenceGenerator([0]);
    const instance = new ArrayShuffle(generator);
    const input = [1];

    const result = instance.shuffle(input);

    const expected = [1];

    expect(result).toEqual(expected);
  });

  it('should work correctly for array of two elements using "dummy almost one generator"', () => {
    const generator = new FromSequenceGenerator([0.9999]);
    const instance = new ArrayShuffle(generator);
    const input = [1, 2];

    const result = instance.shuffle(input);

    const expected = [1, 2];

    expect(result).toEqual(expected);
  });

  it('should work correctly for array of three elements using "dummy almost one generator"', () => {
    const generator = new FromSequenceGenerator([0.9999]);
    const instance = new ArrayShuffle(generator);
    const input = [1, 2, 3];

    const result = instance.shuffle(input);

    const expected = [1, 2, 3];

    expect(result).toEqual(expected);
  });
});
