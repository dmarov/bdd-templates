import { HundredDoors } from './100-doors';
import { ProblemParams } from './problem-params';

const params: ProblemParams = {
  numberOfDoors: 100,
  numberOfIterations: 100,
};

const solution = HundredDoors.resolve(params);

console.log(solution);
