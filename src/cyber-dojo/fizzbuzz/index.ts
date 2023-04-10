import { FizzBuzz } from './fizzbuzz';
import { ProblemParams } from './problem-params';

const params: ProblemParams = {
  mapping: { 3: 'Fizz', 5: 'Buzz' },
};

Array.from({ length: 100 })
  .map((v, i) => i + 1)
  .forEach((i) => {
    console.log(FizzBuzz.resolveFor(i, params));
  });
