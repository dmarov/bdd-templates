import { Generator } from './generator';

export class MathGenerator implements Generator {
  generate(): number {
    return Math.random();
  }
}
