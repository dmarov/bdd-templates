import { ArrayShuffle } from './array-shuffle/array-shuffle';
import { MathGenerator } from './normalized-generators/math';

const array = Array.from({ length: 100 }).map((v, i) => i);
const instance = new ArrayShuffle(() => new MathGenerator());
const result = instance.shuffle(array);

console.log(result);
