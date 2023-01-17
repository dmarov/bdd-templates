import { Anagrams } from './anagrams';

describe('align columns', () => {
  it('should return correct result for one letter word', () => {
    const input = 'a';

    const result = Anagrams.generate(input);

    const expected = ['a'];
    expect(result).toEqual(expected);
  });

  it('should return correct result for two letter word', () => {
    const input = 'ab';

    const result = Anagrams.generate(input);

    const expected = ['ab', 'ba'];
    expect(result).toEqual(expected);
  });

  it('should return correct result same letter gets repeated', () => {
    const input = 'aa';

    const result = Anagrams.generate(input);

    const expected = ['aa'];
    expect(result).toEqual(expected);
  });
});
