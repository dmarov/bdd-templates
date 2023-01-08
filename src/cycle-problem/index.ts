// import { CycleProblem } from './cycle-problem';

// const fn = `
// if (x % 2 === 1) {
//   return (3) * x + (1)
// }

// return (1 / 2) * x`;

// const result = CycleProblem.resolve(fn, 100);

// console.log(result);
//

const fn = (x: number) => {
  switch (x % 2) {
    case 1:
      return (3 / 1) * x + (1 / 1);
    default:
      return (1 / 2) * x + (0 / 1);
  }
};
