import { FromSequenceGenerator } from '../normalized-generators/from-sequence';
import { RangeGenerator } from './range-generator';

describe('random', () => {
  const min = 1;
  const max = 5;

  it('should return value less than maximum', () => {
    const rnd = new RangeGenerator(new FromSequenceGenerator([0.9999]));

    const result = rnd.generate(min, max);

    expect(result).toBeLessThan(max);
  });

  it('should return value greater than or equal to minimum', () => {
    const rnd = new RangeGenerator(new FromSequenceGenerator([0]));

    const result = rnd.generate(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
  });

  it('should return rounded integer', () => {
    const rnd = new RangeGenerator(new FromSequenceGenerator([0.9999]));

    const result = rnd.generate(0, 1);

    expect(result).toEqual(0);
  });
});
