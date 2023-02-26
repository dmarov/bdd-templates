import { NormalizedGenerator } from './normalized-generator';

export class MathRandomGenerator implements NormalizedGenerator {
  generate(): number {
    return Math.random();
  }
}
