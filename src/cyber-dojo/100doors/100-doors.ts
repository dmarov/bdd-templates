import { DoorState } from './door-state';
import { DoorsSet } from './doors-set';
import { ProblemParams } from './problem-params';

export class HundredDoors {
  private static toogleDoor(doorState: DoorState): DoorState {
    return doorState === DoorState.Closed ? DoorState.Open : DoorState.Closed;
  }

  private static generateInitialModel(numberOfDoors: number): DoorsSet {
    return Array.from({
      length: numberOfDoors,
    }).map(() => DoorState.Closed);
  }

  private static next(model: DoorsSet): DoorsSet {
    return model.map((doorState) => this.toogleDoor(doorState));
  }

  static resolve(params: ProblemParams): DoorsSet {
    let model = this.generateInitialModel(params.numberOfDoors);

    for (let i = 0; i < params.numberOfIterations; i += 1) {
      model = this.next(model);
    }

    return model;
  }
}
