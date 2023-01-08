import { ForkFn } from './fork-fn';
import { Mapper } from './mapper';

describe('mapper', () => {
  it('should parse correctly', () => {
    const fn = `
function(x) {
  return (1 / 1) * x + (0 / 1);
}`;

    const result = Mapper.parse(fn);

    const expected: ForkFn = {
      ifs: {},
      ifreturns: {},
      defaultReturn: { mul: [1, 1], add: [0, 1] },
    };

    expect(result).toEqual(expected);
  });
});
