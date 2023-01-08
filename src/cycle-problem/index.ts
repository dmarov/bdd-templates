import { CycleProblem } from './cycle-problem';

const fn = `
const fn = (x: number) => {
  switch (x % 2) {
    case 1:
      return (3 / 1) * x + (1 / 1);
    default:
      return (1 / 2) * x + (0 / 1);
  }
}`;

const result = CycleProblem.resolve(fn, 10);

console.log(result);
