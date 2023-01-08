import { CycleProblem } from './cycle-problem';

const fn = `
if (x % 2 === 1) {
  return (3) * x + (1)
}

return (1 / 2) * x`;

const result = CycleProblem.resolve(fn, 100);

console.log(result);
