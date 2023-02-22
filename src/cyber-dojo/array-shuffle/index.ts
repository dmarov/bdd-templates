import { ArrayShuffle } from './array-shuffle/array-shuffle';
import { MathGenerator } from './normalized-generators/math';

const array = [1, 2, 3, 4, 5];
const instance = new ArrayShuffle(() => new MathGenerator());

const result = instance.shuffle(array);

console.log(result);
