import { FromSequenceGenerator } from './generators/from-sequence';
import { Random } from './random';

describe('random', () => {
  const min = 1;
  const max = 5;

  it('should return value less than maximum', () => {
    const rnd = new Random(new FromSequenceGenerator([0.9999]));

    const result = rnd.generate(min, max);

    expect(result).toBeLessThan(max);
  });

  it('should return value greater than or equal to minimum', () => {
    const rnd = new Random(new FromSequenceGenerator([0]));

    const result = rnd.generate(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
  });
});
