import { ArrayTransformGenerator } from './array-transform-generator';
import { FromSequenceGenerator } from '../normalized-generators/from-sequence';

describe('array transform generator', () => {
  it('should generate array of specified length', () => {
    const gen = new ArrayTransformGenerator(() => new FromSequenceGenerator([0]));

    const result = gen.generate(1);

    expect(result.length).toEqual(1);
  });

  it('should generate array which includes 0', () => {
    const gen = new ArrayTransformGenerator(() => new FromSequenceGenerator([0]));

    const result = gen.generate(2);

    expect(result.includes(0)).toEqual(true);
  });

  it('should generate array which includes 1', () => {
    const gen = new ArrayTransformGenerator(() => new FromSequenceGenerator([0]));

    const result = gen.generate(2);

    expect(result.includes(1)).toEqual(true);
  });

  it('should generate mirror transformation', () => {
    const gen = new ArrayTransformGenerator(() => new FromSequenceGenerator([0]));

    const result = gen.generate(2);

    expect(result).toEqual([0, 1]);
  });

  it('should generate reverse transformation', () => {
    const gen = new ArrayTransformGenerator(() => new FromSequenceGenerator([0.51]));

    const result = gen.generate(2);

    expect(result).toEqual([1, 0]);
  });
});
