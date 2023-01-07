import { Mapper } from './mapper';

describe('align columns mapper', () => {
  it('should parse one line of one word correctly', () => {
    const model = 'a';

    const result = Mapper.parse(model);

    const expected = [['a']];
    expect(result).toEqual(expected);
  });

  it('should parse one line of two words correctly', () => {
    const model = 'a$b';

    const result = Mapper.parse(model);

    const expected = [['a', 'b']];
    expect(result).toEqual(expected);
  });

  it('should parse one line of two words correctly', () => {
    const model = 'a$b';

    const result = Mapper.parse(model);

    const expected = [['a', 'b']];
    expect(result).toEqual(expected);
  });

  it('should parse two line of one word correctly', () => {
    const model = 'a\nb';

    const result = Mapper.parse(model);

    const expected = [['a'], ['b']];
    expect(result).toEqual(expected);
  });

  it('should stringify one line of one word correctly', () => {
    const model = [['a']];

    const result = Mapper.stringify(model, 1);

    const expected = 'a';
    expect(result).toEqual(expected);
  });

  it('should stringify one line of two words correctly', () => {
    const model = [['a', 'b']];

    const result = Mapper.stringify(model, 1);

    const expected = 'a b';
    expect(result).toEqual(expected);
  });

  it('should put correct number of spaces', () => {
    const model = [['a', 'b']];

    const result = Mapper.stringify(model, 2);

    const expected = 'a  b';
    expect(result).toEqual(expected);
  });

  it('should stringify two lines of one word correctly', () => {
    const model = [['a'], ['b']];

    const result = Mapper.stringify(model, 1);

    const expected = 'a\nb';
    expect(result).toEqual(expected);
  });
});
