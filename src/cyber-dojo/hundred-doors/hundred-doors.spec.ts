import { HundredDoors } from './hundred-doors';
import { DoorState } from './door-state';
import { ProblemParams } from './problem-params';

describe('hundred doors', () => {
  it('should return correct answer for 1 door and 0 iterations', () => {
    const params: ProblemParams = {
      numberOfDoors: 1,
      numberOfIterations: 0,
    };

    const solution = HundredDoors.resolve(params);

    expect(solution).toEqual([DoorState.Closed]);
  });

  it('should return correct answer for 2 doors and 0 iteration', () => {
    const params: ProblemParams = {
      numberOfDoors: 2,
      numberOfIterations: 0,
    };

    const solution = HundredDoors.resolve(params);

    expect(solution).toEqual([DoorState.Closed, DoorState.Closed]);
  });

  it('should return correct answer for 1 door and 1 iteration', () => {
    const params: ProblemParams = {
      numberOfDoors: 1,
      numberOfIterations: 1,
    };

    const solution = HundredDoors.resolve(params);

    expect(solution).toEqual([DoorState.Open]);
  });

  it('should return correct answer for 2 doors and 2 iteration', () => {
    const params: ProblemParams = {
      numberOfDoors: 2,
      numberOfIterations: 2,
    };

    const solution = HundredDoors.resolve(params);

    expect(solution).toEqual([DoorState.Open, DoorState.Closed]);
  });
});
