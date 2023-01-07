import { AbcProblem } from './abc-problem';

describe('abc problem', () => {
  it('should return true for "A"', () => {
    const word = 'A';

    const result = AbcProblem.resolve(word);

    expect(result).toEqual(true);
  });

  it('should return false for "AAA"', () => {
    const word = 'AAA';

    const result = AbcProblem.resolve(word);

    expect(result).toEqual(false);
  });

  it('should return true for "a"', () => {
    const word = 'a';

    const result = AbcProblem.resolve(word);

    expect(result).toEqual(true);
  });
});
