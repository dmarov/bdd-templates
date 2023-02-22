import { FromSequenceGenerator } from './from-sequence';

describe('from sequence generator', () => {
  it('should return first value from sequence', () => {
    const generator = new FromSequenceGenerator([0.5, 0.6]);

    expect(generator.generate()).toEqual(0.5);
  });

  it('should return second value from sequence', () => {
    const generator = new FromSequenceGenerator([0.5, 0.6]);

    generator.generate();

    expect(generator.generate()).toEqual(0.6);
  });

  it('should throw error if entry is >= 1', () => {
    expect(() => {
      const generator = new FromSequenceGenerator([1]);
      generator.generate();
    }).toThrowError('invalid argument');
  });

  it('should throw error if entry is < 0', () => {
    expect(() => {
      const generator = new FromSequenceGenerator([-1]);
      generator.generate();
    }).toThrowError('invalid argument');
  });

  it('should return 0 hwne out of values', () => {
    const generator = new FromSequenceGenerator([]);

    expect(generator.generate()).toEqual(0);
  });
});
