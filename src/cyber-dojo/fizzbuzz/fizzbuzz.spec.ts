import { FizzBuzz } from './fizzbuzz';
import { ProblemParams } from './problem-params';

describe('fizzbuzz', () => {
  it('should return correct result when no mapping present', () => {
    const value = 1;
    const params: ProblemParams = {
      mapping: { },
    };

    const result = FizzBuzz.resolveFor(value, params);

    expect(result).toEqual('1');
  });

  it('should return correct result when mapping matched', () => {
    const value = 3;
    const params: ProblemParams = {
      mapping: { 3: 'Fizz' },
    };

    const result = FizzBuzz.resolveFor(value, params);

    expect(result).toEqual('Fizz');
  });

  it('should return correct result when mapping matched twice', () => {
    const value = 15;
    const params: ProblemParams = {
      mapping: { 3: 'Fizz', 5: 'Buzz' },
    };

    const result = FizzBuzz.resolveFor(value, params);

    expect(result).toEqual('FizzBuzz');
  });
});
