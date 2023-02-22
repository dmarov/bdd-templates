import { NormalizedGenerator } from './normalized-generator';

export class MathGenerator implements NormalizedGenerator {
  generate(): number {
    return Math.random();
  }
}
