import { HundredDoors } from './100doors';
import { DoorState } from './door-state';
import { ProblemParams } from './problem-params';

describe('100doors', () => {
  it('should return correct answer for 1 door and 1 iteration', () => {
    const params: ProblemParams = {
      numberOfDoors: 1,
      numberOfIterations: 1,
    };

    const solution = HundredDoors.resolve(params);

    expect(solution).toEqual([DoorState.Open]);
  });
});
