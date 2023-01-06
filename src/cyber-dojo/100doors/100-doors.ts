import { DoorState } from './door-state';
import { DoorsSet } from './doors-set';
import { ProblemParams } from './problem-params';

export class HundredDoors {
  private static toogleDoor(doorState: DoorState, index: number, span: number): DoorState {

    if (index % span === 0) {
      return doorState === DoorState.Closed ? DoorState.Open : DoorState.Closed;
    }

    return doorState;
  }

  private static generateInitialModel(numberOfDoors: number): DoorsSet {
    return Array.from({
      length: numberOfDoors,
    }).map(() => DoorState.Closed);
  }

  private static next(model: DoorsSet, span: number): DoorsSet {
    return model.map((doorState, index) => this.toogleDoor(doorState, index + 1, span));
  }

  static resolve(params: ProblemParams): DoorsSet {
    let model = this.generateInitialModel(params.numberOfDoors);

    for (let i = 0; i < params.numberOfIterations; i += 1) {
      model = this.next(model, i + 1);
    }

    return model;
  }
}
