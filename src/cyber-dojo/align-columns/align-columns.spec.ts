import { AlignColumns } from './align-columns';

describe('align columns', () => {
  it('should align first line with regard to second line', () => {
    const model = 'a$b\ncc$d';

    const result = AlignColumns.align(model, 1);

    const expected = 'a  b\ncc d';
    // a  b
    // cc d
    expect(result).toEqual(expected);
  });

  it('should align second line with regard to first line', () => {
    const model = 'aa$b\nc$d';

    const result = AlignColumns.align(model, 1);

    const expected = 'aa b\nc  d';
    // aa b
    // c  d
    expect(result).toEqual(expected);
  });

  it('should align when line values count is different', () => {
    const model = 'aa$b\nc';

    const result = AlignColumns.align(model, 1);

    const expected = 'aa b\nc';
    // aa b
    // c
    expect(result).toEqual(expected);
  });

  it('should align second column', () => {
    const model = 'a$bb$c\nd$e$f';

    const result = AlignColumns.align(model, 1);

    const expected = 'a bb c\nd e  f';
    // a bb c
    // d e  f
    expect(result).toEqual(expected);
  });

  it('should not regard trailing "$" character as values separator', () => {
    const model = 'a$b\nc$';

    const result = AlignColumns.align(model, 1);

    const expected = 'a b\nc';
    // a b
    // c
    expect(result).toEqual(expected);
  });
});
