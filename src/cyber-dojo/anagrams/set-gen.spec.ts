import { SetGen } from './set-gen';

describe('align columns', () => {
  it('should return correct result for 1', () => {
    const input = 1;

    const result = SetGen.generate(input);

    const expected = [[0]];
    expect(result).toEqual(expected);
  });

  it('should return correct result for 2', () => {
    const input = 2;

    const result = SetGen.generate(input);

    const expected = [
      [0, 1],
      [1, 0],
    ];

    expect(result).toEqual(expected);
  });

  it('should return correct result for 3', () => {
    const input = 3;

    const result = SetGen.generate(input);

    const expected = [
      [0, 1, 2],
      [0, 2, 1],
      [2, 0, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 1, 0],
    ];

    expect(result).toEqual(expected);
  });

  it('should return error for input <= 0', () => {
    const input = 0;

    expect(() => {
      SetGen.generate(input);
    }).toThrowError(new Error('invalid input'));
  });
});
